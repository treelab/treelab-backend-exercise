
module.exports =function(data){
    let len = data.length;
    for(let i=0;i<len;i++){
        data[i]['totalprofit'] = parseFloat( data[i]['totalprofit']);
    }
    
    for(let i=0;i<len;i++){
        for(let j=0;j<len-i-1;j++){
            if(data[j]['totalprofit'] > data[j+1]['totalprofit']){
                tmp = data[j]['totalprofit'] ;
                data[j]['totalprofit'] = data[j+1]['totalprofit'];
                data[j+1]['totalprofit'] =tmp;
            }
        }
    }
    return data
}