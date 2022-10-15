import { useState } from 'react';
import Logo from '../common/Logo/Logo'
import HeaderNavbar from './HeaderNavbar/HeaderNavbar';
import HeaderContact from './HeaderContact/HeaderContact';
import HeaderSearch from './HeaderSearch/HeaderSearch';
import SearchPopup from './SearchPopup/SearchPopup';

function Header() {
    const [searchActive, switchSearch] = useState(false);
    function handleMenuIsOpened() {
        switchSearch(!searchActive);
      }

    return (
        <header className='header'>
            <SearchPopup searchActive={searchActive} handleMenuIsOpened={handleMenuIsOpened}/>
            <div className='header__wrapper'>
                <Logo/>
                <HeaderNavbar />
                <HeaderSearch searchActive={searchActive} handleMenuIsOpened={handleMenuIsOpened}/>
                <HeaderContact/>
            </div>
        </header>
    )
}

export default Header;