import { navLinks } from '../data/navLinks';
import { schoolInfo } from '../data/schoolInfo';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav>
            <div className="nav-brand">
                <h1>{schoolInfo.name}</h1>
            </div>

            <ul className="nav-links">
                {navLinks.map((link, index) => (
                    <li key={index}>
                        <Link to={link.path}>{link.label}</Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Navbar;
