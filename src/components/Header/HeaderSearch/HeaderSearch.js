import searchIcon from "../../../images/search.webp";

export default function HeaderSearch(props) {
  return (
    <img
      className="header__search-icon"
      src={searchIcon}
      onClick={props.handleMenuIsOpened}
      alt="search icon"
    />
  );
}
