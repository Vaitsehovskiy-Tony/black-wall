import getLocales from "../../../utils/getLocales";
import bottomArrow from "../../../images/bottom-arrow.svg";


function HeaderLanguageSelector() {
    const {currentLocale, locales} = getLocales();
    return (
        <div className='header-lang'>
            <div className='header-lang__item-container'>
                <span className='header-lang__item'>{currentLocale}</span>
                <img className='header-lang__bottom-arrow' src={bottomArrow} alt='bottom arrow'/>
            </div>
            <ul className='header-lang__options'>
                {
                    locales.map((locale, index) =>
                <li className='header-lang__options-item' key={index}>{locale}</li>
                )}
            </ul>

        </div>
    )
}

export default HeaderLanguageSelector;