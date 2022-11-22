import Logo from '../common/Logo/Logo'
import HeaderNavbar from './HeaderNavbar/HeaderNavbar';
import HeaderOrderBtn from './HeaderOrderBtn/HeaderOrderBtn';
import HeaderLanguageSelector from './HeaderLanguageSelector/HeaderLanguageSelector';

function Header({headerData}) {

    return (
        <header className='header'>
            <div className='header__wrapper'>
                <Logo/>
                <HeaderNavbar navbar={headerData.navbar}/>
                <HeaderLanguageSelector/>
                <HeaderOrderBtn bttnText={headerData.orderProject}/>
            </div>
        </header>
    )
}

export default Header;