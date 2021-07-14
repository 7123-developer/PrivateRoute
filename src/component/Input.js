
const Input = ({label, name, onChange, value, type= "text"}) => {
    return(
        <div className="input-container">
                <label>{label}</label>
            <input type={type} value={value} name={name} onChange={onChange} />
            </div>
    )
}
export default Input