import './DropDown.css';

interface DropDownProps {
    label: string
    value: string
    onTyping: (value: string) => void
    required: boolean
    itens: string[]
}

const DropDown = (props: DropDownProps) => {
    return (
        <div className='DropDown'>
            <label>{props.label}</label>
            <select
                value={props.value}
                onChange={event => props.onTyping(event.target.value)} 
                required={props.required} 
            >
            <option value='' />
            {props.itens.map( item => <option key={item}>{item}</option>)}
            </select>
        </div>
    )
}

export default DropDown;