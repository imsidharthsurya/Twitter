const helper=require("./dummy-helper")

const execute=()=>{
    const res=helper();
    if(res){
        return "learning nodejs"
    }else{
        return "learning reactjs"
    }
}

module.exports=execute