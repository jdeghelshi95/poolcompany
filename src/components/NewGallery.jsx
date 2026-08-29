import React from "react";
import actionPlastering from "../assets/site/action_plastering.jpg";
import workerPrep from "../assets/site/worker_prep.jpg";
import sunsetConstruction from "../assets/site/sunset_construction.jpg";
import commercialPool from "../assets/site/commercial_pool.jpg";
import projExtra1 from "../assets/site/proj_extra1.jpg";

const data = [
  { imgelink: actionPlastering, label: "Hands-on craftsmanship" },
  { imgelink: workerPrep, label: "Surface prep" },
  { imgelink: sunsetConstruction, label: "Full renovations" },
  { imgelink: commercialPool, label: "Commercial-scale" },
  { imgelink: projExtra1, label: "Residential resurfacing" },
];

const NewGallery = () => {
  const [active, setActive] = React.useState(data[0].imgelink);

  return (
    <div className="grid gap-4">
      <div>
        <img
          className="h-auto w-full max-w-full rounded-lg object-cover object-center md:h-[480px]"
          src={active}
          alt="Baires Pools and Plastering project"
        />
      </div>

      <div className="grid flex flex-row grid-cols-5 gap-6">
        {data.map(({ imgelink, label }, index) => (
          <div key={index}>
            <img
              onClick={() => setActive(imgelink)}
              src={imgelink}
              className="object-cover object-center h-20 max-w-full rounded-lg cursor-pointer"
              alt={label}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewGallery;
