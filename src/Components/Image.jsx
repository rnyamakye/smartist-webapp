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
          onError={(e) => {
            e.currentTarget.style.display = "none";
            e.curentTarget.enerror = null;
          }}
        />
      </Card>
      <Dialog size="" open={open} handler={handleOpen}>
        <DialogBody>
          <img
            alt={alt}
            className="h-[70vh] md:h-[85vh] w-full rounded-lg object-cover object-center"
            loading="lazy"
            src={src}
            // onError={(e) => {
            //   e.currentTarget.style.display = "none";
            //   e.curentTarget.enerror = null;
            // }}
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
