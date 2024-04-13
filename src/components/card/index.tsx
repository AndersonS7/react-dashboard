interface IProps {
    title: string
    value: number
    icon: any
}

const Card = ({ title, value, icon }: IProps) => {
    return (
        <div className="flex flex-col justify-start p-8 h-72 w-96 drop-shadow-lg
        bg-white text-sky-900">
            <div className="flex items-center justify-between">
                <h2 className="text-2xl">{title}</h2>
                {icon}
            </div>
            <p className="text-7xl mt-12">{value}</p>
        </div>
    )
}

export { Card }