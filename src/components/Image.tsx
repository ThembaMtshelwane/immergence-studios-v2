const Image = () => {
  return (
    <div className="h-[200vh] border relative z-50">
      <video
        src="5.mp4"
        autoPlay
        loop
        muted
        playsInline
        aria-hidden="true"
        className="h-full w-full object-center object-cover"
      />
    </div>
  );
};

export default Image;
