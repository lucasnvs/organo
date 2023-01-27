import'./Card.css';

interface CardProps {
    teamColor: string
    image: string
    name: string
    role: string
    date: string
}

const Card = (props: CardProps) => {
    return (
        <div className='card'>
            <div className='header' style={{ backgroundColor: props.teamColor }}>
                <img src={props.image} alt={props.name} />
            </div>
            <div className='cardFooter'>
                <h4>{props.name}</h4>
                <h5>{props.role}</h5>
                <h5>{new Date(props.date).toLocaleDateString()}</h5>
            </div>
        </div>
    )
}

export default Card;