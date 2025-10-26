const ImageCard = ({ src, alt }) => {
  return (
    <div
      className="card grayscale-100 hover:grayscale-0 transition-all duration-300 ease-in-out hover:scale-[1.1] hover:-rotate-1 hover:-translate-1 hover:shadow-[0px_0px_12px_-3px_#96bee7,1px_2px_5px_2px_#000000]
"
    >
      <img
        className="w-full h-full rounded-3xl object-cover object-center"
        src={src}
        alt={alt}
        loading="lazy"
      />
    </div>
  );
};

export default ImageCard;
