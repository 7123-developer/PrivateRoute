
const Home = () => {
    const data = localStorage.getItem("userDetail")
    const showData = JSON.parse(data)
    console.log("&&&&&&&&&&&&&&&&&&&")
    return (
        <div className="home-container">
            <div>Email :{showData.email}</div>
            <div>Password: {showData.password}</div>
            <div>About: {showData.about}</div>
        </div>
    )
}

export default Home