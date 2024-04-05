interface IProps {
    title: string
    email: string
}

const TitlePage = ({ title, email }: IProps) => {
    return (
        <div className="text-center">
            <h2 className="text-2xl font-extrabold uppercase ">{title}</h2>
            <p className="text-sm uppercase">{email}</p>
        </div>
    )
}

export { TitlePage }