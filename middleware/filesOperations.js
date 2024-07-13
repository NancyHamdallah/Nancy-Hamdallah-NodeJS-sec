const fs = require('fs')

function readMyFileFunc(path){
    return fs.readFileSync(path,'utf-8',(err,data)=>{
        if(err){
            return 'ERROR';
        }
        return data;
    })
}


module.exports = {readMyFileFunc}