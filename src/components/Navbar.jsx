import { navLinks } from '../data/navLinks';
import { schoolInfo } from '../data/schoolInfo';

const Navbar = () => {
    return (
        <nav>
            <div className="nav-brand">
                <h1>{schoolInfo.name}</h1>
            </div>

            <ul className="nav-links">
                {navLinks.map((link, index) => (
                    <li key={index}>
                        <a href={link.path}>{link.label}</a>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Navbar;
