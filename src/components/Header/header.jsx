import styles from "./header.module.css"
import { useEffect } from 'react'

const Header = () => {

    useEffect(() => {

        const listener = () => {
            if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
                if (ref.current) {
                    ref.current.classList.add(styles['scroll-header']);
                }
            } else {
                if (ref.current) {
                    ref.current.classList.remove(styles['scroll-header']);
                }
            }
        }

        window.addEventListener('scroll', listener)

        return () => {
            window.removeEventListener('scroll', listener)
        }
    }, [])

    return (
    <div className={styles.header}>
            <img src={""} />
            <div className={styles.navWrap}>
                <a href="/">Home</a>
                <a href="about">About</a>
                <a href="contact">Contact</a>
                <a href="news">News</a>
                <a href="shop">Shop</a>
            </div>
    </div>)
}

export default Header;