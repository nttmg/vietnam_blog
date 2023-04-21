import TripData from "./TripData";
import "./TripStyles.css";
import Trip1 from "../assests/halong (1).jpg";
import Trip2 from "../assests/hue2.jpg";
import Trip3 from "../assests/sapa.jpg";

function Trip() {
  return (
    <div className="trip">
      <h1>Recent Trip</h1>
      <p>You can discover unique destination using Google Maps.</p>
      <div className="tripcard">
        <TripData
          image={Trip1}
          heading="Halong Bay, located in the northeastern part of Vietnam"
          text="The bay features thousands of limestone islands and islets, rising majestically from the turquoise waters of the Gulf of Tonkin. Visitors can explore the bay by boat, kayak or seaplane, and admire the breathtaking scenery of towering cliffs, hidden caves, and pristine beaches."
        />

        <TripData
          image={Trip2}
          heading="Hue, was once the imperial capital of the Nguyen Dynasty"
          text="The city is renowned for its rich history and cultural heritage, with its ancient citadel, royal tombs, and pagodas drawing visitors from all over the world. Hue's most famous attraction is the Imperial City, a vast complex of palaces, temples, and gardens that served as the home of the Nguyen emperors for over a century."
        />

        <TripData
          image={Trip3}
          heading="Sapa is a picturesque town situated in the northwest region of Vietnam"
          text="The town is famous for its stunning natural scenery, including rolling hills, verdant rice terraces, and cascading waterfalls. Visitors to Sapa can enjoy trekking through the lush countryside, interacting with the local ethnic minorities, and experiencing the vibrant traditional culture of the region."
        />
      </div>
    </div>
  );
}

export default Trip;