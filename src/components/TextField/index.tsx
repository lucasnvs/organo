import './TextField.css';

interface TextFieldProps {
    onTyping: (value: string) => void
    placeholder: string
    label: string
    value: string
    required?: boolean
}

const TextField = ({ onTyping, placeholder, label, value, required = false }: TextFieldProps) => {

    return (
        <div className='textField'>
            <label>{label}</label>
            <input 
                    value={value} 
                    onChange={ event => onTyping(event.target.value)} 
                    required={required} 
                    placeholder={`${placeholder}...`}
            />
        </div>
    )
}

export default TextField;