const ImageCard = ({ src, alt }) => {
  return (
    <div className="image-container h-[90%] w-1/3 rounded-3xl grayscale-100 hover:grayscale-0 transition-all duration-300 ease-in-out hover:scale-[1.1] hover:-rotate-1 hover:-translate-1 hover:shadow-[-5px_-3px_30px_-10px_#96bee7,4px_5px_30px_5px_#000000]">
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
