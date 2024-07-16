export default function CustomInput({label, type}) {
    return (
        <div className="flex flex-col max-w-72">
            <label for={`${label}-input`} className="mb-2">{label}</label>
            <input id={`${label}-input`} type={type} className="rounded-lg border-2 border-black h-10 p-2"/>
        </div>
    )
}