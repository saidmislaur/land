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
                    <Image src={CartImg} alt="svg"/>
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