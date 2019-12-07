const {buildSchema,graphql} = require('graphql');

let schema = buildSchema(`
    type Query{
        list:[Line]
    }
    
    type Line{
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
`);

module.exports = function(query,data){
    return graphql(schema,query,data).then(resp=>{
        return resp
    })
}