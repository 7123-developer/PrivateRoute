import { useState } from "react"
import { useHistory } from "react-router-dom"
import Input from '../component/Input'
import _ from 'lodash'

const Login = () => {
    const [useDetail, setUserDetail] = useState({
        userName: '',
        password: ''
    })
    const isEmptyObject = _.flow(_.values, _.compact, _.isEmpty);
    const history = useHistory()
    const data = localStorage.getItem("userDetail")
    const inputText = (e) => {
        const { name, value } = e.target
        const update = { ...useDetail }
        update[name] = value
        setUserDetail(update)
    }

    const onSubmitLogin = (e) => {
        const dataCheck = JSON.parse(data)
        e.preventDefault()  
        if(useDetail.userName === dataCheck?.email && useDetail.password === dataCheck?.password ){
            localStorage.setItem("auth",1)
            window.location.reload();
            history.push("/")
        }else {
            history.push('/signup')
            alert("Please make user")
        }
    }

    return (
        <div className="login-container">
            <div className="login-input-container">
                <div className="login-input-inner">
                    <form onSubmit={(e)=>onSubmitLogin(e)}>
            <Input
                label="Email"
                type="email"
                value={useDetail.userName} name="userName" onChange={(e) => inputText(e)}
            />
            <Input type="password" label="Password" value={useDetail.password} name="password" onChange={(e) => inputText(e)} />
            <Input type="submit" disabled={isEmptyObject(useDetail.userName && useDetail.password) }  value="Login" />
            <div className="sign-up-text" onClick={()=> history.push("/signup")} >Sign Up</div>
            </form>
            </div>         
            </div>
        </div>
    )
}
export default Login