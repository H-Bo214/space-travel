import { getDestinations, getCrew } from '../../apiCalls.js';
import CrewMember from '../../CrewMember/page.js';

export default async function Commander() {
  const crew = await getCrew();
  console.log('crew', crew);
  const { name, images, role, bio } = crew.find(
    (member) => member.role === 'Mission Specialist'
  );
  console.log('role: ', role)
  return (
    <>
      <CrewMember name={name} role={role} bio={bio} images={images} />
    </>
  );
}
