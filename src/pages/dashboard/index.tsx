import { Card } from "../../components/card"
import { LineGraph } from "../../components/linegraph"
import { Menu } from "../../components/menu"
import { useData } from "../../context/data.context"

const Dashboard = () => {

    const { summonths } = useData();
    //console.log(summonths[0]);

    return (
        <div className='flex gap-8 h-screen p-8 bg-gray-100'>
            <div className="flex gap-8 w-1/6">
                <Menu />
            </div>
            <div className="felx gap-8 w-5/6">
                <div className="flex gap-8 p-8 h-2/6 bg-blue-400">
                    <Card title="Lucro Total" value={summonths[0].toString()} />
                    <Card title="Ano Anterior" value="12558" />
                    <Card title="Aumento" value="12558" />
                    <Card title="Taxa Conversão" value="12558" />
                </div>
                <div className="flex gap-8 h-4/6">
                    <div className=" w-5/6 p-8 bg-green-400">
                        <p>Menu com todas as informações dos parceiros</p>
                        <LineGraph />
                    </div>
                    <div className="w-1/6 bg-gray-400">
                        Coluna com resultado do ultimo mês
                    </div>
                </div>
            </div>
        </div>
    )
}

export { Dashboard }