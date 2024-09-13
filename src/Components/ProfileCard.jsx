export default function ProfileCard({
  coverImage,
  displayImage,
  name,
  title,
  scale = 125,
  duration = 500,
}) {
  return (
    <div className="max-w-sm sm:w-full mx-auto bg-white rounded-xl shadow-md overflow-hidden">
      <div className="h-32 w-full overflow-hidden">
        <img
          className={`object-cover sm:w-full sm:h-full transform transition duration-${duration} hover:scale-${scale}`}
          src={coverImage}
          alt="Cover"
        />
      </div>
      <div className="relative px-4 pt-16 pb-16">
        <div className="absolute -top-10 left-1/2 transform -translate-x-1/2">
          <img
            className="md:size-32 sm:size-24 lg:size-32 rounded-full border-4 border-white object-cover"
            src={displayImage}
            alt={name}
          />
        </div>
        <div className="text-center sm:pt-2 lg:mt-5">
          <h2 className="text-xl font-semibold text-gray-800">{name}</h2>
          <p className="text-gray-600">{title}</p>
        </div>
      </div>
    </div>
  );
}
