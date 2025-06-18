import PropTypes from "prop-types";
function Main({ title, linkHref, body }) {
  return (
    <main className="card__main">
      <h1 className="card__title">
        <a className="card__link" href={linkHref}>
          {title}
        </a>
      </h1>
      <p className="card__body">{body}</p>
    </main>
  );
}

Main.propTypes = {
  title: PropTypes.string.isRequired,
  linkHref: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
};

Main.displayName = "Main";
export default Main;
