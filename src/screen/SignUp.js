import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import Input from '../component/Input'


const SignUp = () => {
    const history = useHistory()
    const [userDetail, setUserDetail] = useState({
        email: "",
        password: "",
        about: ""
    })

    const onSubmitSignUp =(e) => {
        e.preventDefault()  
        localStorage.setItem("userDetail",JSON.stringify(userDetail))
        history.push("/")
    }

    const onChangeInput = (e) => {
        const {name,value} = e.target 
        const update = {...userDetail}
        update[name]= value
        setUserDetail(update)
    }

    return(
        <div className="login-container">
            <div className="login-input-container">
                <div className="login-input-inner">
            <form onSubmit={(e)=>onSubmitSignUp(e)}>
            <Input type="email" name="email" label="Email" value={userDetail.email} onChange={(e)=>onChangeInput(e)} />
            <Input type="password" name="password" label="Password" value={userDetail.password} onChange={(e)=>onChangeInput(e)} />
            <Input type="text-area" name="about" label="Abolut" valkue={userDetail.about} onChange={(e)=>onChangeInput(e)} />
            <Input type="submit" value="SignUp"  />
            </form>
            <div className="sign-up-text" onClick={()=> history.push("/")} >Login</div>
        </div>
        </div>
        </div>
    )
}
export default SignUp