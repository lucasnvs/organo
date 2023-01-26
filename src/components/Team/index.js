import Card from '../Card';
import styles from './Team.module.css';

const Team = (props) => {
    return (

        props.employeds.length > 0 &&
        
        <section className={styles.team} style={{ backgroundColor: props.secondaryColor }}>
            <h3 style={{ borderColor: props.primaryColor}}>{props.name}</h3>
            <div className={styles.employeds}>
                {props.employeds.map( employed => <Card
                    teamColor={props.primaryColor}
                    key={employed.name} 
                    name={employed.name} 
                    role={employed.role} 
                    image={employed.image}
                />)}
            </div>
        </section>
    )
}

export default Team;