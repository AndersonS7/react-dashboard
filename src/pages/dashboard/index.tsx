import { LineGraph } from "../../components/linegraph"
import { Menu } from "../../components/menu"

const Dashboard = () => {
    return (
        <div className='flex mx-auto h-screen p-4 bg-gray-100'>
            <div className="w-1/5">
                <Menu />
            </div>
            <div className="w-4/5 bg-blue-400 ">
                <div className="h-3/6">
                    <p>Menu com todas as informações dos parceiros</p>
                    <LineGraph />
                </div>
            </div>
        </div>
    )
}

export { Dashboard }