import destinations from "../../../data.json";
import Planet from "../../Planet/page.js";

export default function Moon() {
  console.log("destinations", destinations);
  return (
    <>
      <Planet
        name={destinations.destinations[0].name}
        image={destinations.destinations[0].images.png}
        description={destinations.destinations[0].description}
        distance={destinations.destinations[0].distance}
        travel={destinations.destinations[0].travel}
      />
    </>
  );
}
