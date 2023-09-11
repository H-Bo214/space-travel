import Technology from "@/app/Technology/page";
import { getTechnologies } from '../../apiCalls.js';

export default async function Vehicle() {
  const technologies = await getTechnologies();
  console.log('technologies', technologies);
  const { name, images, description } = technologies.find(
    (technology) => technology.name === 'Launch vehicle'
  );

  return (
    <>
      <Technology  name={name} description={description} images={images} />
    </>
  )
}