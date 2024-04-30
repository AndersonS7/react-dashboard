interface IProps {
    title: string
    email: string
}

const TitlePage = ({ title, email }: IProps) => {
    return (
        <div className="text-center text-sky-50 font-light">
            <h2 className="text-3xl lg:text-xl 2xl:text-4xl mt-4">{title}</h2>
            <p className="text-base lg:text-xs 2xl:text-2xl text-sky-50/50">{email}</p>
        </div>
    )
}

export { TitlePage }