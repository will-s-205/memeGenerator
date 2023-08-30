import React from "react";

export default function Meme() {
  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });
  const [allMemes, setAllMemes] = React.useState([]);

  React.useEffect(() => {
    console.log("Effect ran");
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((data) => setAllMemes(data.data.memes));
  }, []);

  function randomImage() {
    const random = Math.floor(Math.random() * allMemes.length);
    const url = allMemes[random].url;
    setMeme((prevMeme) => ({ ...prevMeme, randomImage: url }));
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setMeme((prevMeme) => ({
      ...prevMeme,
      [name]: value,
    }));
  }

  return (
    <div>
      <div className="form">
        <div className="form--input">
          <input
            type="text"
            id="top-text"
            required
            size="30"
            placeholder="Enter the top text"
            name="topText"
            value={meme.topText}
            onChange={handleChange}
          />
          <input
            type="text"
            id="bottom-text"
            required
            size="30"
            placeholder="Enter the bottom text"
            name="bottomText"
            value={meme.bottomText}
            onChange={handleChange}
          />
        </div>
        <button className="form--btn" onClick={randomImage}>
          Get a new meme image
        </button>
      </div>
      <div className="meme">
        <img src={meme.randomImage} alt="meme-img" className="meme--image" />
        <h2 id="top" className="meme--text top">
          {meme.topText}
        </h2>
        <h2 id="bottom" className="meme--text bottom">
          {meme.bottomText}
        </h2>
      </div>
    </div>
  );
}
