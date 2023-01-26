import styles from './TextField.module.css';


const TextField = (props) => {

    return (
        <div className={styles.textField}>
            <label>{props.label}</label>
            <input 
                    value={props.value} 
                    onChange={ event => props.onTyping(event.target.value)} 
                    required={props.required} 
                    placeholder={`${props.placeholder}...`}
            />
        </div>
    )
}

export default TextField;