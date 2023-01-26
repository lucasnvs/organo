import styles from './Banner.module.css';

const Banner = () => {
    return (
        <header className={styles.banner}>
            <img src='/images/banner.png' alt="Banner da página do Organo"/>
        </header>
    )  
} 

export default Banner;