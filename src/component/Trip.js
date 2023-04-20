import TripData from "./TripData";
import "./TripStyles.css";
import Trip1 from "../assests/5.jpg";
import Trip2 from "../assests/8.jpg";
import Trip3 from "../assests/6.jpg";

function Trip() {
  return (
    <div className="trip">
      <h1>Recent Trip</h1>
      <p>You can discover unique destination using Google Maps.</p>
      <div className="tripcard">
        <TripData
          image={Trip1}
          heading="Trip in Indonesia"
          text="Indonesia, officially the Republic of Indonesia, is a country in Southeast Asia and Oceania between the Indian and Pacific oceans. It consists of over 17,000 islands, including Sumatra, Java, Sulawesi, and parts of Bomeo and New Culhea."
        />

        <TripData
          image={Trip2}
          heading="The British Museum"
          text="The British Museum is a ticket to relics that reveal some two million years of human history. Feel small standing beneath the colossal presence of Rameses II and contrast the myth and reality of Troy with the graphic world of Manga. This London highlight will take you on a journey of time travel."
        />

        <TripData
          image={Trip3}
          heading="Natural History Museum"
          text="The Natural History Museum takes you on an unfathomable discovery of the formation of the solar system and its path to the present. Trace the origin of our species under the shade of a T. rex and glimpse rare meteorites straight from the surface of Mars. If this doesn’t shake you, the earthquake simulator most certainly will."
        />
      </div>
    </div>
  );
}

export default Trip;
