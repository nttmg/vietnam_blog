import DestinationData from "./DestinationData";
import Mountain1 from "../assests/saigon3.jpg";
import Mountain2 from "../assests/saigon2.jpg";
import Mountain3 from "../assests/hanoi1.jpg";
import Mountain4 from "../assests/hanoi3.jpg";

import "./DestinationStyles.css";

const Destination = () => {
  return (
    <div className="destination">
      <h1>Popular Destination</h1>
      <p>Tours give you the opportunity to see a lot, within a time frame</p>

      <DestinationData
        className="first-des"
        heading="Saigon is a vibrant and bustling metropolis located in the southern part of Vietnam"
        text="As the largest city in the country, it is a hub of commerce, culture, and entertainment. Saigon is a fascinating blend of the old and the new, where modern skyscrapers stand alongside ancient temples and colonial-era buildings. The city is famous for its street food scene, where visitors can savor a variety of delicious local dishes at affordable prices."
        img1={Mountain1}
        img2={Mountain2}
      />

      <DestinationData
        className="first-des-reverse"
        heading="Hanoi, the capital city of Vietnam"
        text="Known for its ancient temples, historic landmarks, and bustling street markets, Hanoi offers a glimpse into Vietnam's rich cultural heritage. Visitors can explore the city's narrow alleyways and discover hidden gems such as the Temple of Literature, Hoan Kiem Lake, and the Old Quarter."
        img1={Mountain3}
        img2={Mountain4}
      />
    </div>
  );
};

export default Destination;
