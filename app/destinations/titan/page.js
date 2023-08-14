import getDestinations from '@/app/apiCalls';
import Destination from '@/app/Destination/page';

export default async function Titan() {
  const destinations = await getDestinations();
  const { name, description, distance, travel, images } = destinations.find(
    (destination) => destination.name === 'titan'
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
