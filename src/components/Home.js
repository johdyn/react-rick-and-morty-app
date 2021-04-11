import RickandMortyImage from "../RickandMortyImage.jpg";
import "../App.css";
export default function Home() {
  return (
    <div className="home-container">
      <h1 className="h1-home">Welcome to the Rick and Morty App</h1>
      <div className="static-image-div">
        <img src={RickandMortyImage} className="home-image" />
      </div>
      <h2 className="h2-home">
        Developed by Johan during the Neue Fische Bootcamp
      </h2>
    </div>
  );
}
