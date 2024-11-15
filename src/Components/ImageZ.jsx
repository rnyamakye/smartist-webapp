import React from "react";
import { Dialog, DialogBody, Card } from "@material-tailwind/react";

const ImageZ = ({ src, alt, name, description, className }) => {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen((cur) => !cur);

  return (
    <div
      className={`relative overflow-hidden shadow-lg border-none rounded-lg ${className}`}
    >
      <Card
        className="w-[100%] h-[100%] cursor-pointer overflow-hidden transition-opacity hover:opacity-90"
        onClick={handleOpen}
      >
        <img
          src={src}
          alt={alt}
          className={`object-cover w-full h-[100%] md:h-full transform transition duration-500 hover:scale-[1.05] cursor-zoom-in`}
          loading="slow"
          onError={(e) => {
            e.currentTarget.style.display = "none";
            e.curentTarget.enerror = null;
          }}
        />
      </Card>
      <Dialog size="" open={open} handler={handleOpen}>
        <DialogBody className="">
          <img
            alt={alt}
            className="h-[70vh] md:h-[90vh] w-full rounded-lg object-cover object-center"
            src={src}
            // onError={(e) => {
            //   e.currentTarget.style.display = "none";
            //   e.curentTarget.enerror = null;
            // }}
          />
        </DialogBody>
      </Dialog>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center text-white p-4 rounded-md">
        <h2 className="text-xl font-bold">{name}</h2>
        <p className="text-md">{description}</p>
      </div>
    </div>
  );
};

export default ImageZ;
