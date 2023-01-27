import'./Card.css';

interface CardProps {
    teamColor: string
    image: string
    name: string
    role: string
}

const Card = (props: CardProps) => {
    return (
        <div className='card'>
            <div className='header' style={{ backgroundColor: props.teamColor }}>
                <img src={props.image} alt={props.name} />
            </div>
            <div className='footer'>
                <h4>{props.name}</h4>
                <h5>{props.role}</h5>
            </div>
        </div>
    )
}

export default Card;