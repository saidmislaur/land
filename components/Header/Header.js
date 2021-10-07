import Image from 'next/image'
import Link from 'next/link'
import styles from '../../styles/Header.module.scss'

import Logo from '../../public/img/Logo.png'

export default function Header() {
    return (
        <div id={'#/'} className='container'>
            <div className={styles.header}>
            <Image src={Logo} alt='logo' />
            <nav className={styles.header_nav}>
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
            <button>+19734122203</button>
            </div>
        </div>
    )
}