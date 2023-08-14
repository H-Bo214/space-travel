import Destination from '../../Destination/page.js';
import { getDestinations } from '../../apiCalls.js';

export default async function Moon() {
  const destinations = await getDestinations();
  const { name, description, distance, travel, images } = destinations.find(
    (destination) => destination.name === 'moon'
  );
  return (
    <>
      <Destination
        name={name}
        image={images.png}
        description={description}
        distance={distance}
        travel={travel}
      />
    </>
  );
}
