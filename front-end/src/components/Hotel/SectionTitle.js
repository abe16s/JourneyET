import react from "react"

export default function SectionTitle({title}) {
    return (
        <div className="flex items-center">
            <hr className="w-1/12 bg-black border-black h-0.5"/>
            <h3 className="font-semibold px-2 text-2xl -mt-2">{title}</h3>
            <hr className="bg-black border-black h-0.5 flex-grow"/>
        </div>
    )
}