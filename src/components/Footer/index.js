import styles from './Footer.module.css';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.socialMedia}>
                <a href='facebook.com' target='_blank'>
                    <img src='/images/fb.png' alt='Facebook logo' />
                </a>
                <a href='twitter.com' target='_blank'>
                    <img src='/images/tw.png' alt='Twitter logo' />
                </a>
                <a href='instagram.com' target='_blank'>
                    <img src='/images/ig.png' alt='Instagram logo' />
                </a>
            </div>
            <img className={styles.logo}src='/images/logo.png' alt='Logo do organo' />
            <p>Desenvolvido por Alura.</p>
        </footer>
    )
}

export default Footer;