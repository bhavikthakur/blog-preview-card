import PropTypes from "prop-types";
function Header({ patternSrc, patternAlt, btnHref, btn, publish }) {
  return (
    <header className="card__header">
      <img
        src={patternSrc}
        alt={patternAlt}
        className="card__pattern"
        loading="lazy"
      />
      <a href={btnHref} className="card__btn">
        {btn}
      </a>
      <p className="card__publish">{publish}</p>
    </header>
  );
}
Header.propTypes = {
  patternSrc: PropTypes.string.isRequired,
  patternAlt: PropTypes.string.isRequired,
  btnHref: PropTypes.string.isRequired,
  btn: PropTypes.string.isRequired,
  publish: PropTypes.string.isRequired,
};

Header.displayName = "Header";
export default Header;
