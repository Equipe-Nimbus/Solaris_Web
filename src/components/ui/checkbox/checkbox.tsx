type CheckboxProps = {
    checked: boolean;
    onChange: () => void;
    label?: string;
}

const Checkbox = ({ checked, onChange, label }: CheckboxProps) => {
    return (
        <label className="flex items-center gap-2">
            <input 
                type="checkbox" 
                checked={checked} 
                onChange={onChange} 
                className="appearance-none w-4 h-4 border-2 border-primary-500 rounded checked:bg-primary-500 checked:border-primary-500 focus:outline-none cursor-pointer"
            /> 
            {label && <span className="text-base text-neutral-100">{label}</span>}
        </label>
    )
}

export { Checkbox };