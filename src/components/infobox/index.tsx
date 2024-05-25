import { useState } from "react";
import { Marker, InfoBox } from "@react-google-maps/api";
import { FaWhatsapp } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { MdOutlineStorefront } from "react-icons/md";
import { Adress, Contact } from "../../interface/StoreResponse.interface";

interface IProps {
    adress: Adress
    contact: Contact
    name: string
}

const InfoBoxStore = ({ adress, name, contact }: IProps) => {
    const [isOpenBox, setOpenBox] = useState(false);

    const isOpen = (): void => {
        setOpenBox(!isOpenBox);
    }

    return (
        <Marker
            position={adress.center}
            onClick={isOpen}
        >

            {isOpenBox && <InfoBox
                options={{ closeBoxURL: ``, enableEventPropagation: true }}

            >
                <div className="flex flex-col gap-2 mt-4 p-4 h-full w-96 break-all text-white bg-sky-800">
                    <div className="mb-5 uppercase">
                        <h2 className="flex items-center gap-2 text-2xl text-wrap">
                            <MdOutlineStorefront />
                            {name}</h2>
                        <span className="flex items-center gap-2 text-xs font-light text-white/60">
                            {adress.road} {adress.number} - {adress.zone} <br />
                            {adress.city} - {adress.uf}
                        </span>
                        <hr className="mt-2 border-slate-100/10" />
                    </div>
                    <div className="text-lg">
                        <h2 className="flex gap-2 items-center">
                            <FaWhatsapp className="text-xl" />
                            {`${contact.phone}`}
                        </h2>
                        <h2 className="flex gap-2 items-center">
                            <MdOutlineEmail className="text-xl" />
                            {contact.email}
                        </h2>
                    </div>
                </div>
            </InfoBox>}
        </Marker>
    )
}

export { InfoBoxStore }