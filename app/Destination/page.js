import Image from "next/image";

export default function Destination({ name, description, image, distance, travel }) {
  return (
    <section>
      <section>
        <Image src={image} width={445} height={445} alt={name} />
      </section>
      <article>
        <h2>{name}</h2>
        <p>{description}</p>
        <section>
          <h3>AVG DISTANCE</h3>
          <p>{distance}</p>
        </section>
        <section>
          <h3>EST. TRAVEL TIME</h3>
          <p>{travel}</p>
        </section>
      </article>
    </section>
  );
}
