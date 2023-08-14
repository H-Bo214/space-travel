import { getDestinations } from '../../apiCalls.js';
import Destination from '@/app/Destination/page';

export default async function Europa() {
  const destinations = await getDestinations();
  const { name, description, distance, travel, images } = destinations.find(
    (destination) => destination.name === 'europa'
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
