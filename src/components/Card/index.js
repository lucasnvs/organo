import styles from './Card.module.css';

const Card = (props) => {
    return (
        <div className={styles.card}>
            <div className={styles.header} style={{ backgroundColor: props.teamColor }}>
                <img src={props.image} alt={props.name} />
            </div>
            <div className={styles.footer}>
                <h4>{props.name}</h4>
                <h5>{props.role}</h5>
            </div>
        </div>
    )
}

export default Card;