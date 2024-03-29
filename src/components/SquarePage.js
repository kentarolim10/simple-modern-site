import { useEffect, useState } from "react";
import styles from "../styles/SquarePage.module.css";
import bluePhotoRectangle from "../assets/BluePhotoRectangle.jpg";
import blueOrangeSquare from "../assets/BlueOrangeSquare.jpg";
import purpleWide from "../assets/PurpleWide.jpg";

const SquarePage = () => {
    const minWidth = 900;
    const [windowWidth,setWindowWidth] = useState(window.innerWidth);

    const handleResize = () => {
        setWindowWidth(window.innerWidth);
    };

    useEffect(()=>{
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    },[])

    return (
        <div className={styles.mainContainer}>
            {windowWidth < minWidth ? <HamburgerMenu/> : <RegularHeader/>}
            <div className={styles.frameContainer}>
                <img src={bluePhotoRectangle} alt="" className={styles.photo}/>
                <div className={styles.frameTextContainer}>
                    <div className={styles.frameTextTitle}>
                        Lightbulb Title
                    </div>
                    <div className={styles.frameTextBody}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, odit!
                    </div>
                    <button className={styles.frameTextButton}>View now</button>
                </div>
            </div>
            <div className={styles.frameContainerReverse}>
                <img src={blueOrangeSquare} alt="" className={styles.photo}/>
                <div className={styles.frameTextContainer}>
                    <div className={styles.frameTextTitle}>
                        Blue Flowers with Orange Background
                    </div>
                    <div className={styles.frameTextBody}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Architecto repellat fuga id eveniet fugit iste assumenda optio? 
                        Molestiae quod esse rerum nostrum, iste sunt quam, dolorum, excepturi 
                        maiores obcaecati vel ducimus cupiditate? Amet repellat officiis eaque et 
                        doloribus quam corrupti? Dignissimos facilis aperiam laborum fugit, adipisci 
                        iure similique nam culpa!
                    </div>
                    <button className={styles.frameTextButton}>Check it out</button>
                </div>
            </div>
            <div className={styles.halfFrameContainer}>
                <div className={styles.halfFrame}>
                    <img src={purpleWide} alt="" className={styles.halfFramePhoto}/>
                    <div className={styles.frameTextContainer}>
                        <div className={styles.frameTextTitle}>
                            A nice wide photo
                        </div>
                        <div className={styles.frameTextBody}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        </div>
                        <button className={styles.frameTextButton}>See more</button>
                    </div>
                </div>
                <div className={styles.halfFrameTextContainer}>
                    <div className={styles.halfFrameTextTitle}>
                        This is some Additional Text
                    </div>
                    <div className={styles.frameTextBody}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo 
                        labore amet corrupti illo dolore accusamus hic modi, optio earum nulla 
                        distinctio iure maiores assumenda facere cumque. Iste laboriosam magnam 
                        itaque facilis molestiae voluptatem ipsum veniam consectetur voluptas ex? 
                        Facere, sequi. 
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
};

const HamburgerMenu = () => {
    const [burgerMenuOn,setBurgerMenuOn] = useState(false);
    const [firstRender,setFirstRender] = useState(true);
    const [moveMenu,setMoveMenu] = useState({
        "left": "false",
        "right": "false"
    });
    useEffect(()=>{
        if (!firstRender) {
            if (burgerMenuOn) {
                setMoveMenu((prevMove) => ({
                    "left": "true",
                    "right": "false"
                }));
            } else {
                setMoveMenu((prevMove) => ({
                    "left": "false",
                    "right": "true"
                }));
            }
        }
    },[burgerMenuOn]);
    const handleBurgerMenu = () => {
        setBurgerMenuOn((prev) => !prev);
        setFirstRender(false);
    };
    return (
        <div className={styles.headerContainer}>
            <div className={styles.header}>
                <div className={styles.logo}></div>
                <div className={styles.navButtonContainer}>
                    <div className={styles.navButton} onClick={handleBurgerMenu} >
                        <div className={styles.barOne}></div>
                        <div className={styles.barTwo}></div>
                        <div className={styles.barThree}></div>
                    </div>
                </div>
            </div>
            <BurgerNav moveMenu={moveMenu} setMoveMenu={setMoveMenu} burgerMenuOn={burgerMenuOn}/>
        </div>
    );
};

const BurgerNav = ({burgerMenuOn,moveMenu,setMoveMenu}) => {
    const handleAnimationEnd = () => {
        setMoveMenu({
            "left": "false",
            "right": "false"
        });
    };
    // onAnimationEnd={handleAnimationEnd}
    return (
        <nav className={styles.hamburgerMenuNav}
        // <nav className={burgerMenuOn ? styles.hamburgerMenuNav : styles.hamburgerMenuNavOff} 
         data-movemenuleft={moveMenu.left} data-movemenuright={moveMenu.right}>
            <div className={styles.navLinkHamburger}>PAGE</div>
            <div className={styles.navLinkHamburger}>PAGE</div>
            <div className={styles.navLinkHamburger}>PAGE</div>
            <div className={styles.navLinkHamburger}>
                <button className={styles.findStoreButton}>Find a store</button>
            </div>
        </nav>
    );
};

const RegularHeader = () => {
    return (
        <div className={styles.header}>
            <div className={styles.leftHeader}>
                <div className={styles.logo}></div>
                <nav className={styles.navBar}>
                    <div className={styles.navLink}>PAGE</div>
                    <div className={styles.navLink}>PAGE</div>
                    <div className={styles.navLink}>PAGE</div>
                </nav>
            </div>
            <div className={styles.rightHeader}>
                <div className={styles.findStoreButtonContainer}>
                    <button className={styles.findStoreButton}>Find a store</button>
                </div>
            </div>
        </div>
    );
}

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerList}>
                <div className={styles.footerTitle}>About</div>
                <button className={styles.footerLink}>Our company</button>
                <button className={styles.footerLink}>News</button>
                <button className={styles.footerLink}>Help</button>
            </div>
            <div className={styles.footerList}>
                <div className={styles.footerTitle}>Careers</div>
                <button className={styles.footerLink}>Work</button>
            </div>
            <div className={styles.footerList}>
                <div className={styles.footerTitle}>Business Partners</div>
                <button className={styles.footerLink}>Franchise Opporunities</button>
                <button className={styles.footerLink}>Branded Solutions</button>
            </div>
        </footer>
    );
};

export default SquarePage;