import { useEffect, useState } from "react";
import { Card } from "../../components/card";
import { LineGraph } from "../../components/linegraph";
import { Menu } from "../../components/menu";
import { useData } from "../../context/data.context";
import { FaCoins } from "react-icons/fa";
import { BsFillPeopleFill } from "react-icons/bs";
import { BsArrowUpSquareFill } from "react-icons/bs";

const Dashboard = () => {
    const [currentMonth, setCurrentMonth] = useState(0);
    const [conversionStyle, setConversionStyle] = useState("");
    const [beforeStyle, setBeforeStyle] = useState("");

    const { summonths } = useData();
    const { customerbase } = useData();
    const { conversion } = useData();
    const { before } = useData();

    const nextMonth = () => {
        if (currentMonth < conversion.length - 1)
            setCurrentMonth(currentMonth + 1)
    }

    const beforeMonth = () => {
        if (currentMonth > 0)
            setCurrentMonth(currentMonth - 1)
    }

    useEffect(() => {
        setConversionStyle("text-4xl text-emerald-500");
        setBeforeStyle("text-4xl text-emerald-500");

        if (conversion[currentMonth] < before[currentMonth])
            setConversionStyle("text-4xl text-red-500 rotate-180");

        if (before[currentMonth] < conversion[currentMonth])
            setBeforeStyle("text-4xl text-red-500 rotate-180");

    }, [currentMonth])

    return (
        <div className='flex h-screen bg-gray-200'>
            <div className="flex p-8 w-1/6 bg-sky-800">
                <Menu />
            </div>
            <div className="felx p-8 w-5/6">
                <div className="flex justify-between w-full h-2/6">
                    <Card title="Lucro Total" value={summonths[currentMonth]} icon={<FaCoins className="text-4xl" />} />
                    <Card title="Base Cliente" value={customerbase[currentMonth]} icon={<BsFillPeopleFill className="text-4xl" />} />
                    <Card title="Conversão" value={conversion[currentMonth]} icon={<BsArrowUpSquareFill className={conversionStyle} />} />
                    <Card title="Anterior" value={before[currentMonth]} icon={<BsArrowUpSquareFill className={beforeStyle} />} />
                </div>
                <div className="flex justify-between w-full gap-8 h-4/6">
                    <div className="w-5/6 p-8 drop-shadow-lg bg-white">
                        <LineGraph />
                    </div>
                    <div className="w-1/6 drop-shadow-lg bg-white">
                        Coluna com resultado do ultimo mês
                        <hr />
                        <button onClick={beforeMonth}>Anterior</button>
                        <button onClick={nextMonth}>Próximo</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export { Dashboard }