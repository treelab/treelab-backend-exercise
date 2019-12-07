module.exports =function(data,order){
    // order分类
    let cache = data;
    orders = order.trim().split('_')
    if(orders.length != 2){
        return {data:null,err:"错误的order"}
    }
    
    let column =  orders[0].trim();
    let r = orders[1];

    if (r =="desc" ){
        cache.sort((a,b)=>{
            if(a[column].length == b[column].length){
                return b[column].localeCompare(a[column]);
            }else{
                return b[column].length - a[column].length;
            }
        })
        return {data:cache,err:null}
    }else if( r=='asc'){
        cache.sort((a,b)=>{
            if(a[column].length == b[column].length){
                return a[column].localeCompare(b[column]);
            }else{
                return a[column].length - b[column].length;
            }
        })
        return {data:cache,err:null}
    }else{
        return {data:null,err:"错误的order"}
    }
}