interface InputFieldProps {
    label: string;
    name: string;
    type?: string;
    placeholder: string;
    register: any;
    error: any;
    onChange?: any;
}

function InputField({ label, name, type = "text", placeholder, register, error, onChange }: InputFieldProps) {
    return (
        <div className="mb-4">
            <label htmlFor={name} className="block text-gray-800 mb-1">{label}</label>
            <input
                id={name}
                type={type}
                placeholder={placeholder}
                {...register(name)}
                onChange={onChange}
                className="w-full px-4 py-2 bg-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-900 transition duration-300"
            />
            {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
        </div>
    );
}

export { InputField };