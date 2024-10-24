import React from "react";

const NewGallery = () => {
  const data = [
    {
      imgelink:
        "https://i.imgur.com/wOcsb1P.jpeg",
    },

    {
      imgelink:
        "https://i.imgur.com/Ji8x1ha.jpeg",
    },

    {
      imgelink:
        "https://i.imgur.com/wLUFo5k.jpeg",
    },

    {
      imgelink:
        "https://i.imgur.com/RKX91IG.jpeg",
    },

    {
      imgelink:
        "https://i.imgur.com/Qce8IsJ.jpeg",
    },
  
  ];

  const [active, setActive] = React.useState(
    "https://i.imgur.com/f8ZKqGk.jpeg",
  );

  return (
    <div className="grid gap-4">
      <div>
        <img
          className="h-auto w-full max-w-full rounded-lg object-cover object-center md:h-[480px]"
          src={active}
          alt=""
        />
      </div>

      <div className=" grid flex flex-row grid-cols-5 w-  gap-6">
        {data.map(({ imgelink }, index) => (
          <div key={index}>
            <img
              onClick={() => setActive(imgelink)}
              src={imgelink}
              className="object-cover object-center h-20 max-w-full rounded-lg cursor-pointer"
              alt="gallery-image"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default NewGallery