import { useEffect, useState } from "react";
import { Card } from "../../components/card";
import { LineGraph } from "../../components/linegraph";
import { Menu } from "../../components/menu";
import { useData } from "../../context/data.context";
import { FaCoins } from "react-icons/fa";
import { BsFillPeopleFill } from "react-icons/bs";
import { BsArrowUpSquareFill } from "react-icons/bs";
import { Table } from "../../components/table";
import { FaLongArrowAltRight } from "react-icons/fa";
import { ButtonPage } from "../../components/mbutton";

const Dashboard = () => {

    const [currentMonth, setCurrentMonth] = useState(0);
    const [conversionStyle, setConversionStyle] = useState("");
    const [beforeStyle, setBeforeStyle] = useState("");
    const { summonths } = useData();
    const { customerbase } = useData();
    const { conversion } = useData();
    const { before } = useData();
    const { months } = useData();
    //const { usedata } = useData(); // trocar o nome de usedata para details
    const { names } = useData();

    const summonthsConverted = summonths.map(num => {
        if (num > 9999) {
            return 'R$ ' + (num / 1000).toFixed(1) + 'k';
        } else {
            return 'R$ ' + num;
        }
    });

    const nextMonth = (): void => {
        if (currentMonth < conversion.length - 1)
            setCurrentMonth(currentMonth + 1);
    };

    const beforeMonth = (): void => {
        if (currentMonth > 0)
            setCurrentMonth(currentMonth - 1);
    };

    useEffect(() => {
        setConversionStyle("2xl:text-4xl text-xl text-emerald-500");
        setBeforeStyle("2xl:text-4xl text-xl text-emerald-500");

        if (conversion[currentMonth] < before[currentMonth])
            setConversionStyle("2xl:text-4xl text-xl text-red-500 rotate-180");

        if (before[currentMonth] < conversion[currentMonth])
            setBeforeStyle("2xl:text-4xl text-xl text-red-500 rotate-180");

    }, [currentMonth]);

    return (
        <div className='grid grid-cols-12 h-screen bg-gray-200'>
            <div className="grid col-span-2 h-full bg-sky-800">
                <Menu />
            </div>
            <div className="grid col-span-10 grid-rows-4 2xl:gap-8 2xl:p-8 lg:gap-4 lg:p-4">
                <div className="grid grid-cols-4 row-span-1 2xl:gap-x-8 lg:gap-x-4">
                    <Card title="Lucro Total" value={summonthsConverted[currentMonth]} icon={<FaCoins className="2xl:text-4xl text-xl" />} />
                    <Card title="Base Cliente" value={customerbase[currentMonth].toString()} icon={<BsFillPeopleFill className="2xl:text-4xl text-xl" />} />
                    <Card title="Conversão" value={conversion[currentMonth].toString()} icon={<BsArrowUpSquareFill className={conversionStyle} />} />
                    <Card title="Anterior" value={before[currentMonth].toString()} icon={<BsArrowUpSquareFill className={beforeStyle} />} />
                </div>
                <div className="grid grid-cols-4 row-span-3 2xl:gap-x-8 gap-x-4">
                    <div className="grid col-span-3 2xl:p-8 p-2 drop-shadow-lg bg-white">
                        <LineGraph />
                    </div>
                    <div className="grid col-span-1 2xl:p-8 2xl:gap-8 p-2 gap-2 drop-shadow-lg bg-white">
                        <h2 className="2xl:text-2xl text-lg font-normal 2xl:font-bold text-sky-900">{names[currentMonth]}</h2>
                        <Table months={months[currentMonth]} />
                        <div className="flex justify-between 2xl:gap-8 gap-4 2xl:h-2/4 h-1/4">
                            <ButtonPage func={() => beforeMonth()} type="button">
                                <FaLongArrowAltRight className="rotate-180" />
                            </ButtonPage>
                            <ButtonPage func={() => nextMonth()} type="button">
                                <FaLongArrowAltRight />
                            </ButtonPage>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export { Dashboard }