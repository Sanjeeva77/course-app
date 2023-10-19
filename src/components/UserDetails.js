import { useParams } from "react-router-dom"

export const UserDetails=()=>{
    const {userId}=useParams()
    // const userId=params.userId
    return <div>Details About User {userId}</div>
}