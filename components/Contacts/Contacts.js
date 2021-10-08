import Link from 'next/link';
import Image from 'next/image';
import styles from '../../styles/Contacts.module.scss';
import CartImg from '../../public/img/cart.png';
import Logo from '../../public/img/footerLogo.png';

export default function Contacts() {
    return (
        <div id={'contacts'} className={styles.contacts}>
            <div className="container">
                <h1>CONTACTS</h1>
                <div className={styles.contacts_content}>
                    <nav className={styles.contacts_nav}>
                        <ul>
                            <li>
                                <Link href="/">
                                    <a>Home</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="#about">
                                    <a>About us</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="#advantages">
                                    <a>Advantages</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="#products">
                                    <a>Products</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="#reviews">
                                    <a>Reviews</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="#contacts">
                                    <a>Contacts</a>
                                </Link>
                            </li>
                        </ul>
                    </nav>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.4646926642695!2d-74.19615088463374!3d40.75180307932763!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25498a33cbde3%3A0x4c59182e8f11400c!2zNTIzIFcgTWFya2V0IFN0LCBOZXdhcmssIE5KIDA3MTA3LCDQodCo0JA!5e0!3m2!1sru!2sru!4v1633680029470!5m2!1sru!2sru" width="80%" height="450" style={{border: '0'}} allowFullScreen="" loading="lazy"></iframe>
                    <div className={styles.contacts_info}>
                        <div className={styles.contacts_info__connection}>
                            <span>+19734122203</span>
                            <span>50bmgpharm@gmail.com</span>
                        </div>
                        <div className={styles.contacts_info__addres}>
                            <span>523 W Market St, Newark, NJ 07107, USA</span>
                        </div>
                        <div className={styles.contacts_info__social}>
                            <img src='/img/insta.svg' alt="inst"/>
                            <img src='/img/youtube.svg' alt="youtube" />
                            <img src="/img/facebook.svg" alt="face"/>
                        </div>
                        <div className={styles.contacts_info__logo}>
                            <Image src={Logo} alt="logo" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}