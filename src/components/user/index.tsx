import userimg from "../../../public/image/user.png";

const User = () => {
    return <img src={userimg} alt="user" width={150} height={150} 
    className="bg-sky-900 rounded-full p-1"/>
}

export { User }