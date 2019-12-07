const fs =  require('fs');
// 行数据
let lines = [];
// 字段信息
let columns=[];
// 字段长度
let columnsLen = 0;
let total =0;

let data= fs.readFileSync('./10000 Sales Records.csv');        
data =  data.toString().split('\r\n');

// columns
let columnline = data[0].split(",");
columnsLen= columnline.length;
for(let i=0;i<columnsLen;i++){
    columns.push(columnline[i].toLowerCase().replace(/\s*/g,""));
}

total = data.length-1;
for(let i=1;i< total;i++){
    let temp ={};
    let line = data[i].split(",");
    for(let j=0;j<columnsLen;j++){
        temp[columns[j]] = line[j]
    } 
    lines.push(temp);  
}

module.exports =  lines;


