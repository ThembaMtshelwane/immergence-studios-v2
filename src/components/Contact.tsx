const Contact = () => {
  return (
    <div className="border h-screen grid grid-rows-4 p-4 md:grid-cols-2 lg:grid-cols-3">
      <h1 className="text-4xl sm:text-7xl col-span-full self-center justify-self-center md:text-8xl">
        IMMEGERGENCE
      </h1>
      <div className="col-span-full md:col-span-1 lg:row-[3/4]  self-center justify-self-center">
        <p>Lorem ipsum dolor sit.</p>
        <p>Lorem ipsum dolor sit.</p>
        <p>Lorem ipsum dolor sit.</p>
        <p>Lorem ipsum dolor sit.</p>
      </div>
      <div className="col-span-full md:col-[2/3] lg:col-[3/4] lg:row-[3/4]  self-center justify-self-center">
        <p>Lorem ipsum dolor sit.</p>
        <p>Lorem ipsum dolor sit.</p>
        <p>Lorem ipsum dolor sit.</p>
      </div>
      <div className="relative col-span-full md:row-[3/5] lg:col-[2/3]">
        <p className="absolute">Lorem ipsum dolor sit.</p>
        <img
          className="h-full w-full object-center object-cover"
          src="https://images.unsplash.com/photo-1745106673075-d616222217b8?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
      </div>
    </div>
  );
};

export default Contact;
