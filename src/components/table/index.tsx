interface IProps {
    months: Object
}

const Table = ({ months }: IProps) => {

    return (
        <table className="table-auto border-collapse border text-center">
            <thead>
                <tr className="bg-slate-400 text-white 2xl:text-lg lg:text-xs">
                    <th className="border border-slate-300 2xl:px-4 2xl:py-2 lg:px-2 lg:py-1">MÊS</th>
                    <th className="border border-slate-300 2xl:px-4 2xl:py-2 lg:px-2 lg:py-1">VENDAS</th>
                </tr>
            </thead>
            <tbody>
                {
                    Object.entries(months).map(([nome, valor], index) => (
                        <tr key={index} className={index % 2 === 0 ? "border 2xl:text-base text-xs text-sky-900 text-transform: uppercase" : "border 2xl:text-base text-xs text-sky-900 text-transform: uppercase bg-slate-300"}>
                            <td className="border 2xl:px-4 2xl:py-2 px-2 py-1">{nome}</td>
                            <td className="border 2xl:px-4 2xl:py-2 px-2 py-1">{valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    )
}

export { Table }
