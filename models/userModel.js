import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name:String,
    email:String,
    password:String,
    lastName:{
        type:String,
        default:'Last Name'
    },
    role:{
        type:String,
        enum:['user', 'admin'],
        default:'user'
    },
    avatar:{
        avatar:String,
        avatarPublicId: String,
    }
})

userSchema.methods.toJSON = function(){
    let obj = this.toObject()
    delete obj.password
    return obj
}

export default mongoose.model('User', userSchema)