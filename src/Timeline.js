import React, { useEffect, useState } from "react";

export default function Timeline() {
    const [bbEpisodes, setBbEpisodes] = useState([]);

    useEffect(() => {
        fetch("https://www.breakingbadapi.com/api/episodes?series=Breaking+Bad")
          .then(response => response.ok && response.json())
          .then(episodes => {
            console.warn(episodes);
            setBbEpisodes(episodes);
          })
          .catch(console.error);
      }, []);
    
      console.log('data', bbEpisodes)

      return (
          <h1>Timeline</h1>
      )
}