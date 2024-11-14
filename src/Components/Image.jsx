import React from "react";
import { Dialog, DialogBody, Card } from "@material-tailwind/react";

const Image = ({ src, alt, name, description, title, className }) => {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen((cur) => !cur);

  return (
    <div
      className={`relative overflow-hidden flex sm:flex-col lg:flex-row gap-5 border-none rounded-xl ${className}`}
    >
      <Card
        className="w-full cursor-pointer overflow-hidden transition-opacity hover:opacity-90"
        onClick={handleOpen}
      >
        <img
          src={src}
          alt={alt}
          className={`object-cover w-full cursor-zoom-in ${className}`}
        />
      </Card>
      <Dialog size="" open={open} handler={handleOpen}>
        <DialogBody>
          <img
            alt={alt}
            className="h-full w-full rounded-lg object-cover object-center"
            src={src}
          />
        </DialogBody>
      </Dialog>
      <div className="flex flex-col gap-2">
        <h2 className="text-xl font-semibold">{name}</h2>
        <p className="text-gray-600">{title}</p>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export default Image;
