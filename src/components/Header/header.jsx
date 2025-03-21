import Container from "../Container/container"
import styles from "./header.module.css"
import { useEffect, useRef } from 'react'

const Header = () => {

    const ref = useRef()

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
        <div ref={ref} className={styles.header}>
            <Container className={styles.headerContainer}>
                <img src={"/carlexdesign.png"} />
                <div className={styles.navWrap}>
                    <a href="/">Home</a>
                    <a href="about">About</a>
                    <a href="contact">Contact</a>
                    <a href="news">News</a>
                    <a href="shop">Shop</a>
                </div>
                <div className={styles.buttonDiv}>
                    <a href="createaccount"><button>Create Account</button></a>
                    <a href="createaccount"><button>Login</button></a>
                </div>
            </Container>
        </div >
    )
}

export default Header;