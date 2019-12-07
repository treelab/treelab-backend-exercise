const { ApolloServer, gql } = require('apollo-server');
const data =  require('./data/readfile');

// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.
const typeDefs = gql`
#total总记录数 #paging当前分页信息 #item查找指定条目 #orderby字段排序('totalprofit'为例子)
    type Query{
        total:Int
		paging(current:Int,limit:Int,orderby:String):Page
		item(orderid:String):Item
	}
	
#行记录
    type Item {
        region:String
        country:String
        itemtype:String
        saleschannel:String
        orderpriority:String
        orderdate:String
        orderid:String
        shipdate:String
        unitssold:String
        unitprice:String
        unitcost:String
        totalrevenue:String
        totalcost:String
        totalprofit:String
    }

#分页信息 totalpage总分数 current当前页 list当前分页数据条目
    type Page {
        totalpage:Int
        current:Int
        list:[Item]
	}
`;

const resolvers = {
	Query: {
        total:()=>data.length,
        paging:(root,{current =1,limit=10,orderby})=>{
            let cache = [];
            let err;
            if(limit <0 ||current <=0 ){
                return null
			}

            //数据预处理
            if(orderby != undefined){
                r= require('./orderby/common')(data,'totalprofit_desc');
                if (r.err != null){
                    return null
                }
                cache =  r.data;
                // console.log(cache)
            }else{
				cache = data;
            }

            let len =  cache.length
            let pages = Math.floor(len/limit)
            
            if( current >pages){
                return null
            }

            head =  limit*(current-1)
            tail =  limit*current

            if (tail > len){
                return {totalpage:pages,current:current,list:cache.slice(head)}
            }else{
                return  {totalpage:pages,current:current,list:cache.slice(head,tail)}
            }
		},
		item:(root,{ orderid })=>{
			return data.filter(item=>{
				return item['orderid'] == orderid
			})[0]
		},
    },

};

// console.log(data.slice(0,3))
// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({ typeDefs, resolvers });

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
	console.log(`🚀  Server ready at ${url}`);
});

// {
//     total,
//     paging(current:4,limit:5,orderby:"totalprofit_asc"){
//       totalpage
//         current
//       list{
//         orderpriority
//         region
//         itemtype
//         totalprofit
//       }
//     }
// }