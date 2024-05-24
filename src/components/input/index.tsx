import { FieldError } from "react-hook-form";

interface IProps extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
    mtype: "text" | "number" | "email"
    mplaceholder: string
    register: any
    name: string
    error: FieldError | undefined
}

const InputPage = ({ mtype, mplaceholder, register, name, error, ...rest }: IProps) => {
    return (
        <div className="w-full">
            <input {...register(name)} className="w-full mb-8 p-2 text-sm 2xl:text-lg border-b-2 outline-none border-slate-300" {...rest} type={mtype} placeholder={mplaceholder} />
            {error && (<p className=" p-4 w-full text-red-900 bg-red-400">{error?.message}</p>)}
        </div>
    )
}

export { InputPage }
