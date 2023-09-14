import Technology from '@/app/Technology/page';
import { getTechnologies } from '../../apiCalls.js';

export default async function SpaceCapsule() {
  const technologies = await getTechnologies();
  const { name, images, description } = technologies.find(
    (technology) => technology.name === 'Space capsule'
  );

  return (
    <>
      <Technology name={name} description={description} images={images} />
    </>
  );
}
