import './Banner.css';

interface BannerProps {
    imageAddress: string
    alternativeText?: string
}

const Banner = ({ imageAddress, alternativeText} : BannerProps) => {
    return (
        <header className='banner'>
            <img src={imageAddress} alt={alternativeText}/>
        </header>
    )  
} 

export default Banner;