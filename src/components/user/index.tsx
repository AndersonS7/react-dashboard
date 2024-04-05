import userimg from "../../../public/image/user.png";

const User = () => {
    return <img src={userimg} alt="user" width={100} height={100} 
    className="bg-blue-300 rounded-full p-1"/>
}

export { User }