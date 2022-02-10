import { useState } from "react"
import { useDispatch } from "react-redux"
import {login} from "../../redux/apiCalls"

const Login = () => {
const [username,setUsername] = useState('')
const [password,setPassword] = useState('')
const dispatch = useDispatch()

const handleLogin = (e)=>{
    e.preventDefault()
    login(dispatch,{username,password})
}

  return (
    <div style={{display:"flex",alignItems:"center",justifyContent:"center", height:"100vh",flexDirection:"column"}}>
        <input style={{padding:10,marginBottom:20}} type="text" onChange={(e)=>setUsername(e.target.value)} placeholder="username" />
        <input style={{padding:10,marginBottom:20}} type="password" onChange={(e)=>setPassword(e.target.value)} placeholder="password" />
        <button style={{padding:10,width:100}} onClick={handleLogin}>LOGIN</button>
    </div>
  )
}

export default Login