import styles from '../../styles/About.module.scss'
export default function About() {
    return (
        <div id={'about'} className={styles.container}>
            <div className={styles.about_content}>
                <h1>ABOUT US</h1>
                <h2>COMPANY OWNED & OPERATED MANUFACTURING</h2>
                <p>With state-of-the-art production facilities in USA, 
                    50 BMG PHARM is one of the few sports nutrition companies to manufacture in every product category. 
                    From the very beginning, 50 BMG PHARM has always taken a hands-on approach to maintaining the very 
                    highest standards of quality.
                </p>
                <h2>UNCOMPROMISING QUALITY</h2>
                <p>Before a single machine is turned on in our manufacturing facilities, 
                    50 BMG PHARM procurement professionals carefully select the most premium raw materials. 
                    A Certificate of Analysis is required for every ingredient, which is then tested and retested for 
                    compliance. Quality assurance performs daily inspections of our current Good Manufacturing 
                    Practices (cGMPs) compliant facilities, which are GMP registered. The Plant is also Informed 
                    Sport and Informed Choice registered and retains a Grade A BRC food Certificate. 
                    50 BMG PHARM is a Preferred Supplier to the English Institute of Sport (EIS)
                </p>
                <h2>CUSTOMER SATISFACTION</h2>
                <p>50 BMG PHARM strict ingredients selection, quality control, lab testing and manufacturing 
                    processes are all done for one reason: to provide you with the highest quality sports nutrition 
                    products available. Our company was founded with a mission to bring consistent quality to the 
                    marketplace, and we are constantly working on setting even higher standards.
                </p>
            </div>
        </div>
    )
}


