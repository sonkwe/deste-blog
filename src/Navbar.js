import './index.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
    
    return (
        <nav className="navbar">
            <div >
                <Link to ="/" className="logo"> Deste Blog </Link>
            </div>
            <ul className="liens">
                <li>
                    <Link to ="/" className="lien"> Acceuill</Link>
                </li>
                <li>
                    <Link to ="/ajouter" className="lien buttonArticle" > Creer Articles</Link>
                </li>
            </ul>
        </nav>
    );
};
 
export default Navbar;