import { getDestinations, getCrew } from '../../apiCalls.js';
import CrewMember from '../../CrewMember/page.js';

export default async function Pilot() {
  const crew = await getCrew();
  console.log('crew', crew);
  const { name, images, role, bio } = crew.find(
    (member) => member.role === 'Flight Engineer'
  );
  console.log('role: ', role)
  return (
    <>
      <CrewMember name={name} role={role} bio={bio} images={images} />
    </>
  );
}
