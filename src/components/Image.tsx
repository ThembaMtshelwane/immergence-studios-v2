const Image = () => {
  return (
    <div className="h-[200vh] border relative z-50">
      <img
        className="h-full w-full object-center object-cover"
        src="image.jpg"
        alt=""
      />
    </div>
  );
};

export default Image;
