import styles from './DropDown.module.css';

const DropDown = (props) => {
    return (
        <div className={styles.DropDown}>
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