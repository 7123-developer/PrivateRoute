import { useHistory } from "react-router-dom"

const Home = () => {
    const history = useHistory()
    const data = localStorage.getItem("userDetail")
    const showData = JSON.parse(data)
    console.log("&&&&&&&&&&&&&&&&&&&")
    const onclickSignout = () => {
        localStorage.clear() 
        window.location.reload();
        history.push('/')
    }
    return (
        <div className="home-container">
            <div>Email :{showData.email}</div>
            <div>Password: {showData.password}</div>
            <div>About: {showData.about}</div>
            <button onClick={()=> onclickSignout()}>Sign out</button>   
        </div>
    )
}

export default Home