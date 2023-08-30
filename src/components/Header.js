export default function Header() {
  return (
    <header className="header">
      <div className="header--title">
        <img
          className="header--img"
          alt="header-img"
          src="./images/troll-face.png"
        />
        <h2>Meme Generator</h2>
      </div>
      <div className="header--subheading">
        <p>React Course - Project 3</p>
      </div>
    </header>
  );
}
