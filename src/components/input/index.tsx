interface IProps extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
    mtype: "text" | "number" | "email"
    mplaceholder: string
}

const InputPage = ({ mtype, mplaceholder, ...rest }: IProps) => {
    return (
        <input className="w-full p-2 text-sm 2xl:text-lg border-b-2 mb-8 outline-none border-slate-300" {...rest} type={mtype} placeholder={mplaceholder} />
    )
}

export { InputPage }

// **ver como o input erdas as propriedades do input