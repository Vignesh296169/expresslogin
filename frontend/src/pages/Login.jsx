import Wrapper from "../component/Wrapper";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
function Login() {
  const[nameState,setName]=useState("")
  const[passwordState,setPassword]=useState("")
  const [content,setContent]=useState("")
  const navigate = useNavigate();
  const nameChange=(e)=>{
    setName(e.target.value)
  }
  const passwordChange=(e)=>{
    setPassword(e.target.value)
  }
 
  const submitHandler=async(e)=>{

    e.preventDefault()
    try{
      const response= await axios.post("http://localhost:3000/api/login",{
      name:nameState,
      password:passwordState
     })
     console.log(response.data)
     if(response.data.msg=="user found"){
      console.log("ok da thambi")
      navigate("/private")
     }
    setName("")
    setPassword("")
    setContent("")
    }catch(err){
          console.log(err.message)
          setContent(err.message)
    }
    
}
  return (
    <Wrapper>
    <form onSubmit={submitHandler} className="gap-2 my-[13rem] flex flex-col ">
      <input
        type="text"
        className="border-2 border-slate-400 outline-none"
        name="username"
     
        value={nameState}
        onChange={nameChange}
      />
      <input
        type="text"
        className="border-2 border-slate-400 outline-none"
        name="password"
       
        value={passwordState}
        onChange={passwordChange}
      />
      <button className="bg-blue-400 p-2 rounded-md" type="submit">login</button>
    </form>
    <p>{content}</p>
    </Wrapper>
  );
}

export default Login;
