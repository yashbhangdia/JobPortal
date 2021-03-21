//Create a react app from scratch.
//It should display a h1 heading.
//It should display an unordered list (bullet points).
//It should contain 3 list elements.
import React from "react";
import ReactDOM from "react-dom";

ReactDOM.render(
   <div>
     <h1 className="heading" contentEditable="true" spellCheck="false">Rashi's Playlist</h1>
     <div>
        <img className="music-img" src="https://m.media-amazon.com/images/I/818p5eUvd2L._SS500_.jpg" alt="I Like Me Better by Lauv"/>
        <img className="music-img" src="https://upload.wikimedia.org/wikipedia/en/1/17/Ellie_Goulding_-_Love_Me_Like_You_Do.png" alt="Love Me Like You Do by Ellie Goulding"/>
        <img className="music-img" src="https://pics.filmaffinity.com/Ed_Sheeran_Photograph_Music_Video-683612395-mmed.jpg" alt="Photograph by Ed Sheeran"/>
     </div>
   </div>,
  document.getElementById("root")
);