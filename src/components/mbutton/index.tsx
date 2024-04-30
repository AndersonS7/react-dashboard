interface IProps {
    func?: () => void
    children: any
    type: "submit" | "reset" | "button"
}

const ButtonPage = ({ children, type, func }: IProps) => {
    return (
        <button type={type} onClick={func} className="flex justify-center items-center p-4 w-full h-full text-base uppercase text-white active:scale-95 bg-sky-800 hover:bg-sky-700">{children}</button>
    )
}

export { ButtonPage }