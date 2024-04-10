interface IProps {
    title: string
    value: string
}

const Card = ({ title, value }: IProps) => {
    return (
        <div className="flex flex-col justify-center items-center w-5/6 bg-gray-200">
            <h2 className="text-start w-full h-1/4 bg-gray-400">{title}</h2>
            <p className="text-center text-5xl w-full h-3/4 bg-gray-600">{value}</p>
        </div>
    )
}

export { Card }