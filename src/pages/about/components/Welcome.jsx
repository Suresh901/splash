const Welcome = () => {
  return (
    <div
      className="w-full my-20 text-white text-center p-20"
      style={{
        backgroundImage:
          "url('https://c.files.bbci.co.uk/E319/production/_128973185_gettyimages-1081724146.jpg')",
        backgroundAttachment: "fixed",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <h1 className="text-4xl font-bold mb-4">Welcome to our swimmer</h1>
      <h2 className="text-2xl mb-2">Book an appointment now</h2>
      <p className=" mx-auto">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco lenderit in voluptate.
      </p>
    </div>
  );
};

export default Welcome;
