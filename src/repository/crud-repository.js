class CrudRepository{
    constructor(model)  //which model we want to create like: tweet, hashtag etc
    {
        this.model=model;
    }

    async create(data){
        try{
            const res=await this.model.create(data);
            return res;
        }catch(err){
            console.log("something went wrong in repository layer create ",err);
            throw err;
        }
    }

    async get(id){
        try{
            const res=await this.model.findById(id);
            return res;
        }catch(err){
            console.log("something went wrong in repository layer get ",err);
            throw err;
        }
    }

    async getAll(){
        try{
            const res=await this.model.find({})
            return res;
        }catch(err){
            console.log("something went wrong in repository layer get ",err);
            throw err;
        }
    }
    async destroy(id){
        try{
            const res=await this.model.findByIdAndDelete(id);
            return res;
        }catch(err){
            console.log("something went wrong in repository layer delete ",err);
            throw err;
        }
    }

    async update(id,data){
        try{
            const res=await this.model.findByIdAndUpdate(id,data,{new:true});
            return res;
        }catch(err){
            console.log("something went wrong in repository layer update ",err);
            throw err;
        }
    }
}

export default CrudRepository