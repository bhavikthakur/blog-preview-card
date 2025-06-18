import Header from "./Header.js";
import Main from "./Main.js";
import Footer from "./Footer.js";

function Card() {
  return (
    <div className="card">
      <Header
        patternSrc="assets/images/illustration-article.svg"
        patternAlt="An abstract yellow and black pattern"
        btn="Learning"
        publish="Published 21 Dec 2023"
        btnHref="https://www.frontendmentor.io/home"
      />
      <Main
        title="HTML & CSS foundations"
        linkHref="https://www.frontendmentor.io/challenges/blog-preview-card-ckPaj01IcS"
        body="These languages are the backbone of every website, defining structure,
        content, and presentation"
      />
      <Footer
        avatarSrc="/assets/images/image-avatar.webp"
        avatarAlt="Avatar"
        author="Greg Hooper"
        authorHref="https://www.linkedin.com/in/bhavik-thakur/"
      />
    </div>
  );
}
Card.displayName = "Card";
export default Card;
