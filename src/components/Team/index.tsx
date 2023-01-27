import { IEmployed } from '../../shared/interfaces/IEmployed';
import Card from '../Card';
import './Team.css';


interface TeamProps {
    primaryColor: string
    secondaryColor: string
    name: string
    employeds: IEmployed[]
}
const Team = (props: TeamProps) => {
    return (

        (props.employeds.length > 0) ?
        <section className='team' style={{ backgroundColor: props.secondaryColor }}>
            <h3 style={{ borderColor: props.primaryColor}}>{props.name}</h3>
            <div className='employeds'>
                {props.employeds.map( employed => 
                <Card
                    teamColor={props.primaryColor}
                    key={employed.name} 
                    name={employed.name} 
                    role={employed.role} 
                    image={employed.image}
                    date={employed.date}
                />)}
            </div>
        </section>
        : <></>
    )
}

export default Team;