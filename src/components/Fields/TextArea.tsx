interface TextareaFieldProps {
    label: string;
    name: string;
    placeholder: string;
    register: any;
    error: any;
}

function TextareaField({ label, name, placeholder, register, error }: TextareaFieldProps) {
    return (
        <div className="mb-4">
            <label htmlFor={name} className="block text-gray-800 mb-1">{label}</label>
            <textarea
                id={name}
                placeholder={placeholder}
                {...register(name)}
                rows={5}
                className="w-full min-h-32 max-h-64 overflow-y-scroll px-4 py-2 bg-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-900 transition duration-300"
            />
            {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
        </div>
    );
}

export { TextareaField };