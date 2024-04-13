interface IProps {
    title: string
    email: string
}

const TitlePage = ({ title, email }: IProps) => {
    return (
        <div className="text-center text-sky-50 font-light">
            <h2 className="text-3xl uppercase mt-4">{title}</h2>
            <p className="text-base uppercase text-sky-50/50">{email}</p>
        </div>
    )
}

export { TitlePage }