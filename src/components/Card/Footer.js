import PropTypes from "prop-types";

function Footer({ avatarSrc, avatarAlt, authorHref, author }) {
  return (
    <footer className="card__footer">
      <img src={avatarSrc} alt={avatarAlt} className="card__avatar" />
      <a className="card__author" href={authorHref}>
        {author}
      </a>
    </footer>
  );
}

Footer.propTypes = {
  avatarSrc: PropTypes.string.isRequired,
  avatarAlt: PropTypes.string.isRequired,
  authorHref: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

Footer.displayName = "Footer";
export default Footer;
