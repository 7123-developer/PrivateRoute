
const Input = ({label, name, onChange, value, type= "text", disabled}) => {
    return(
        <div className="input-container">
                <label>{label}</label>
            <input type={type} disabled={disabled} value={value} name={name} onChange={onChange} />
            </div>
    )
}
export default Input