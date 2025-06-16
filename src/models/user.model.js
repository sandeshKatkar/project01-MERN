import mongoose, {Schema} from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken"

const userSchema=new Schema({
    username:{
        type:String,
        required:true,
        unique:true,
        lowercase:true,
        trim:true,
        index:true
    },
     email:{
        type:String,
        required:true,
        unique:true,
        lowercase:true,
        trim:true
    },
     fullname:{
        type:String,
        required:true,
        trim:true,
        index:true
    },
     avtar:{
        type:String,  // cloudnary url
        required:true,
    },
     coverImage:{
        type:String,   //cloudnary url   
    },
    watchHistory:[
        {
            type:Schema.Types.ObjectId,
            ref:"Video"
        }
    ],
    password:{
        type:String,
        required:[true, "Password id Required !"]
    },
    refreshToken:{
        type:String,

    }
},{timestamps:true})

// used for encrypt the password
userSchema.pre("save",async function (next) {
    if(!this.isModified("password")) return next()  // this checks the password is modified or not
    this.password=bcryp.hash(this.password, 10)
    next()
})

// check password is correct or not
userSchema.methods.isPasswordCorrect=async function(password) {
    return await bcrypt.compare(password,this.password)
    
}

// add jwt tokens

userSchema.methods.generateAccessToken=function(){
    jwt.sign(
        {
            _id:this._id,
            email:tis.email,
            username:this.username,
            fullname:this.fullname
        },
        process.env.ACCESS_TOKEN_SECRET,{
            expiresIn:process.env.ACCESS_TOKEN_EXPIRY
        }
    )
}

userSchema.methods.generateRefreshToken=function(){
    jwt.sign(
        {
            _id:this._id,
        },
        process.env.REFRESH_TOKEN_SECRET,{
            expiresIn:process.env.REFRESH_TOKEN_EXPIRY
        }
    )
}

export const User=mongoose.model("User",userSchema)