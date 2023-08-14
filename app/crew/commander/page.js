import { getDestinations } from '../../apiCalls.js';
import CrewMember from '../../CrewMember/page.js';

export default function Commander() {
  // const destinations = await getDestinations();
  // const { name, description, distance, travel, images } = destinations.find(
  //   (destination) => destination.name === 'europa'
  // );
  return (
    <>
      <h1>Commander page</h1>
      <CrewMember />
    </>
  );
}
