import { Link } from "react-router-dom"

const Header = () => {
    return (
        <div className="header">
            <Link className="link" to='/'>Главная</Link>
            <Link className="link" to='/Services'>Услуги</Link>
            <Link className="link" to='/Contacts'>Контакты</Link>
        </div>
    );
}

export default Header;
