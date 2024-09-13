import React, { useState } from "react";
import { Dialog, DialogBody, Card } from "@material-tailwind/react";

const ImageZ = ({ src, alt, name, description, className }) => {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen((cur) => !cur);

  return (
    <div
      className={`relative overflow-hidden shadow-lg border-none rounded-lg ${className}`}
    >
      <Card
        className="w-full cursor-pointer overflow-hidden transition-opacity hover:opacity-90"
        onClick={handleOpen}
      >
        <img
          src={src}
          alt={alt}
          className={`object-cover sm:w-full sm:h-full transform transition duration-500 hover:scale-125`}
        />
      </Card>
      <Dialog size="" open={open} handler={handleOpen}>
        <DialogBody>
          <img
            alt={alt}
            className="h-full w-fullrounded-lg object-cover object-center"
            src={src}
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
