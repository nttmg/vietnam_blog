import DestinationData from "./DestinationData";
import Mountain1 from "../assests/1.jpg";
import Mountain2 from "../assests/2.jpg";
import Mountain3 from "../assests/3.jpg";
import Mountain4 from "../assests/4.jpg";

import "./DestinationStyles.css";

const Destination = () => {
  return (
    <div className="destination">
      <h1>Popular Destination</h1>
      <p>Tours give you the opportunity to see a lot, within a time frame</p>

      <DestinationData
        className="first-des"
        heading="Admire the British capital from the London Eye"
        text="Watch London unfurl from the iconic 135-metre height of the London Eye. The unmatched views extend in every direction, reaching Buckingham Palace, the river Thames and the famed clock tower of the Palace of Westminster. All London’s highlights in one peaceful, 30-minute rotation."
        img1={Mountain1}
        img2={Mountain2}
      />

      <DestinationData
        className="first-des-reverse"
        heading="Take in the views of Britain's Lake District"
        text="Delve into Britain’s natural wonders and take in the panorama of rolling hills, rocky mountains and glittering waters of the Lake District. Abounding in outdoor opportunities from cruises to hilltop walks, you'll find serenity in this national park resting between Leeds and Glasgow."
        img1={Mountain3}
        img2={Mountain4}
      />
    </div>
  );
};

export default Destination;
