import { useForm } from "react-hook-form";
import Button from "../components/ui/Button";
import Input from "../components/ui/Input";
import { useContext } from "react";
import { AuthStore } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";


function Login() {

  const {register, handleSubmit} = useForm()
  const navigate = useNavigate()

  const {loginUser} = useContext(AuthStore)

  function handleData(data) {
    console.log(data);
    loginUser(data)
    navigate('/')
  }
  
  return (
    <div className="max-w-sm h-screen mx-auto flex flex-col justify-center">
        <h1 className="text-2xl font-bold">Login</h1>
        <p className="text-base">welcome user</p>
        <form onSubmit={handleSubmit(handleData)}>
            <Input type="email" label="email" placeholder ="Enter your email" register= {register} />
            <Input type="password" label="password" placeholder ="Enter your password" register={register} />    
            <Button />      
        </form>
    </div>
  )
}

export default Login
