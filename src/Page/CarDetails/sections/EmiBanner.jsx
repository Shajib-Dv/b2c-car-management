const EmiBanner = () => {
  return (
    <div className="rounded-md shadow-md border-x-2 p-4 space-y-3 w-full">
      <h1 className="title text-gray-400">EMI Starts</h1>
      <p className="text-2xl font-bold">₹ 15,317 /Month </p>
      <p>Interest calculated at 9.8% for 60 months</p>
      <button className="btn-act">View Finance Offers</button>
      <div>
        <h2 className="title">Maruti Baleno Video</h2>
        <iframe
          className="rounded-lg"
          width="100%"
          height="350"
          src="https://www.youtube.com/embed/Jl9D9PH8aFI?si=o9TIj3JR8qmDza6C"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default EmiBanner;
