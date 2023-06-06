import cls from './Footer.module.css'

const FooterMenu = () => {
    return(
    <nav className={cls.footer_menu}>
            <div>Партнерам</div>
            <div>Разработчикам</div>
            <div>Вакансии</div>
    </nav>
);
}

export default FooterMenu;