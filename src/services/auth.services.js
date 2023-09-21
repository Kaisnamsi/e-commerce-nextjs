import axios from "axios"

const AuthServices = {
    login:async(data)=>{
        return axios.post(`${process.env.NEXT_PUBLIC_API_URL}/login`,data,{
            headers:{
                "Content-Type":"application/json"
            }
        })
    },
    signup:async(data)=>{
      return await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/signup`,data,{
        headers:{"Content-Type":"application/json"}
      })
    
    }
}

export default AuthServices