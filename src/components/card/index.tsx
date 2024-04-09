interface IProps {
    title: string
    value: string
}

const Card = ({ title, value }: IProps) => {
    return (
        <div>
            <h2>{title}</h2>
            <p>{value}</p>
        </div>
    )
}

export { Card }