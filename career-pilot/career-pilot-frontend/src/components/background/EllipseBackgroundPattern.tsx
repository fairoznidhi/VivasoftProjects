const EllipseBackgroundPattern = () => {
  return (
    <div
      className="fixed top-0 left-0 w-full h-full pointer-events-none -z-10"
      style={{
        backgroundImage: "url('/images/ellipse.svg')",
        backgroundRepeat: "repeat",
        backgroundSize: "7px 40px", // tile size (width x height)
        backgroundPosition: "top left",
        backgroundOrigin: "content-box", // try this
        paddingBottom: "40px", // doesn't affect bg but for test
      }}
    ></div>
  );
};

export default EllipseBackgroundPattern;
