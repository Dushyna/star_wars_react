const Input = ({className,type,name,placeholder}) => {
    return (
        <input className={` bg-cyan-50 p-4 border rounded-2xl  ${className ?? ''}`} type={`${type ?? 'text'}`}  name={name} placeholder={placeholder}/>

    );
};

export default Input;