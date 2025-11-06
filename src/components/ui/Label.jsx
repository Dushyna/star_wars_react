const Label = ({children, className}) => {
    return (
        <label className={`bg-cyan-300 p-4 border rounded-2xl${className ?? ''}`} >{children}</label>

    );
};

export default Label;