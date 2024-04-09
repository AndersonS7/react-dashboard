import { Card } from "../../components/card"
import { LineGraph } from "../../components/linegraph"
import { Menu } from "../../components/menu"

const Dashboard = () => {
    return (
        <div className='flex mx-auto h-screen p-4 bg-gray-100'>
            <div className="w-1/5">
                <Menu />
            </div>
            <div className="felx w-4/5">
                <div className="h-2/6 bg-blue-400">
                    <Card title="Total Cliente" value="12558" />
                    <Card title="Total Cliente" value="12558" />
                    <Card title="Total Cliente" value="12558" />
                    <Card title="Total Cliente" value="12558" />
                </div>
                <div className="flex h-4/6">
                    <div className=" w-4/6 p-8 bg-green-400">
                        <p>Menu com todas as informações dos parceiros</p>
                        <LineGraph />
                    </div>
                    <div className="w-2/6 bg-gray-400">
                        Coluna com resultado do ultimo mês
                    </div>
                </div>
            </div>
        </div>
    )
}

export { Dashboard }