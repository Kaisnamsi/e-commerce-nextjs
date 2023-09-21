import axios from "axios"

const customerServices = {
    feedback:async(data)=>{
        return axios.post(`${process.env.NEXT_PUBLIC_API_URL}/feedback`,data,{
            headers:{
                "Content-Type":"multipart/form-data"
            }
        })
    }
}

export default customerServices