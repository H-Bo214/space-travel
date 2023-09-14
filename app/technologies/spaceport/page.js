import Technology from '@/app/Technology/page';
import { getTechnologies } from '../../apiCalls.js';

export default async function Spaceport() {
  const technologies = await getTechnologies();
  const { name, images, description } = technologies.find(
    (technology) => technology.name === 'Spaceport'
  );

  return (
    <>
      <Technology name={name} description={description} images={images} />
    </>
  );
}
