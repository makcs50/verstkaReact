import cls from './Header.module.css'

const Menu = () => {
    return(
    <nav className = {cls.menu}>
            <div>Главная</div>
            <div>О нас</div>
            <div>Контакты</div>
    </nav>
);
}

export default Menu;