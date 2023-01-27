import './TextField.css';

interface TextFieldProps {
    onTyping: (value: string) => void
    placeholder: string
    label: string
    value: string
    required?: boolean
    type?: 'text' | 'password' | 'date' | 'email' | 'number'
}

const TextField = ({ onTyping, placeholder, label, value, required = false, type = 'text' }: TextFieldProps) => {

    return (
        <div className='textField'>
            <label>{label}</label>
            <input
                    type={type}
                    value={value} 
                    onChange={ event => onTyping(event.target.value)} 
                    required={required} 
                    placeholder={`${placeholder}...`}
            />
        </div>
    )
}

export default TextField;