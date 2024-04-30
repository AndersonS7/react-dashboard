import userimg from "../../../public/image/user.png";

const User = () => {
    return <img src={userimg} alt="user"
        className="bg-sky-900 rounded-full p-1 w-24 lg:w-16 2xl:w-32" />
}

export { User }