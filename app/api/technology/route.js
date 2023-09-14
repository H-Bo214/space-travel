import { NextResponse } from 'next/server';

export async function GET(request) {
  //Handle GET request for /api/crew
  //Retrieve crew from the database or any data source
  // route http://localhost:3000/api/technology
  const technology = [
    {
      name: 'Launch vehicle',
      images: {
        portrait: {
          jpg: '/images/technology/image-launch-vehicle-portrait.jpg',
          width: 515,
          height: 527,
        },
        landscape: {
          jpg: '/images/technology/image-launch-vehicle-landscape.jpg',
          width: 768,
          height: 310,
        },
      },
      description:
        "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
    },
    {
      name: 'Spaceport',
      images: {
        portrait: {
          jpg: '/images/technology/image-spaceport-portrait.jpg',
          width: 515,
          height: 527,
        },

        landscape: {
          jpg: '/images/technology/image-spaceport-landscape.jpg',
          width: 768,
          height: 310,
        },
      },
      description:
        'A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.',
    },
    {
      name: 'Space capsule',
      images: {
        portrait: {
          jpg: '/images/technology/image-space-capsule-portrait.jpg',
          width: 515,
          height: 527,
        },
        landscape: {
          jpg: '/images/technology/image-space-capsule-landscape.jpg',
          width: 768,
          height: 310,
        },
      },
      description:
        "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.",
    },
  ];
  return NextResponse.json(technology);
}
