import mongoose ,{ Schema , Document } from "mongoose";

export interface Message extends Document{
    content: string,
    createdAt:Date
}

const messageSchema: Schema<Message> = new Schema({
    content:{
        type:String,
        required:true
    },
    createdAt:{
        type:Date,
        default:Date.now
    }
})

export interface User extends Document{
    username:string,
    email:string,
    password:string,
    verifyCode:number,
    verifyCodeExpiry:Date,
    isAcceptMessage:boolean,
    isVerified:boolean,
    messages: Message[],
}


const UserSchema: Schema<User> = new Schema({
    username:{
        type:String,
        required:[true,"Username is required."],
        trim:true,
        unique:true
    },
    email:{
        type:String,
        required:[true,"Email is required."],
        trim:true,
        unique:true
    },
    password:{
        type:String,
        required:[true,"Password is required."],
    },
    verifyCode:{
        type:Number,
        required:[true,"Verify Code is required."],
    },
    verifyCodeExpiry:{
        type:Date,
        required:[true,"Verify code expiry is required."],
    },
    isAcceptMessage:{
        type:Boolean,
        default:true
    },
    isVerified:{
        type:Boolean,
        default:false
    },
    messages:[messageSchema]
})






const userModel = mongoose.model<User>("User",UserSchema)

export default userModel;