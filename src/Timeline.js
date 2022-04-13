import React, { useEffect, useState } from "react";

const getDate = dateString => {
    const date = dateString.split("-");
    return new Date(date[2], date[0] - 1, date[1]);
  };

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