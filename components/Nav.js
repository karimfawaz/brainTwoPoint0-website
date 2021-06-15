import navStyles from '../styles/Nav.module.css'
import { Link } from "react-scroll";

const Nav = () => {
    return (
        <nav className={navStyles.navBar}>

            <Link className={navStyles.navItem}
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                offset={0}
                duration={1000}
            > About</Link>

            <Link className={navStyles.navItem}
                activeClass="active"
                to="skills"
                spy={true}
                smooth={true}
                offset={0}
                duration={2000}
            > Services</Link>
            
            <svg className={navStyles.brain} aria-hidden="true" focusable="false" data-prefix="fas" data-icon="brain" class="svg-inline--fa fa-brain fa-w-18" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M208 0c-29.9 0-54.7 20.5-61.8 48.2-.8 0-1.4-.2-2.2-.2-35.3 0-64 28.7-64 64 0 4.8.6 9.5 1.7 14C52.5 138 32 166.6 32 200c0 12.6 3.2 24.3 8.3 34.9C16.3 248.7 0 274.3 0 304c0 33.3 20.4 61.9 49.4 73.9-.9 4.6-1.4 9.3-1.4 14.1 0 39.8 32.2 72 72 72 4.1 0 8.1-.5 12-1.2 9.6 28.5 36.2 49.2 68 49.2 39.8 0 72-32.2 72-72V64c0-35.3-28.7-64-64-64zm368 304c0-29.7-16.3-55.3-40.3-69.1 5.2-10.6 8.3-22.3 8.3-34.9 0-33.4-20.5-62-49.7-74 1-4.5 1.7-9.2 1.7-14 0-35.3-28.7-64-64-64-.8 0-1.5.2-2.2.2C422.7 20.5 397.9 0 368 0c-35.3 0-64 28.6-64 64v376c0 39.8 32.2 72 72 72 31.8 0 58.4-20.7 68-49.2 3.9.7 7.9 1.2 12 1.2 39.8 0 72-32.2 72-72 0-4.8-.5-9.5-1.4-14.1 29-12 49.4-40.6 49.4-73.9z"></path></svg>
            <Link className={navStyles.navItem}
                activeClass="active"
                to="projects"
                spy={true}
                smooth={true}
                offset={0}
                duration={3000}
            > Projects</Link>
            <Link className={navStyles.navItem}
            activeClass="active"
            to="contact"
            spy={true}
            smooth={true}
            offset={0}
            duration={4000}
        > Contact</Link>
        </nav>
    )
}

export default Nav
