interface IProps {
    title: string
    value: string
    icon: any
}

const Card = ({ title, value, icon }: IProps) => {
    return (
        <div className="flex flex-col justify-start 2xl:p-8 p-4 h-full w-full drop-shadow-lg
        bg-white text-sky-900">
            <div className="flex items-center justify-between">
                <h2 className="2xl:text-2xl text-xl">{title}</h2>
                {icon}
            </div>
            <p className="2xl:text-7xl text-4xl pt-12">{value}</p>
        </div>
    )
}

export { Card }