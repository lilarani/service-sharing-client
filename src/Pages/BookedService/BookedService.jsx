const BookedService = ({ service }) => {
  const {
    servicesImage: image,
    servicesName: name,
    servicesPrice: price,
    takingDate: date,
    serviceStatus: status,
    servicesId: id,
  } = service;

  return (
    <div className="flex flex-col md:flex-row gap-8 space-y-4 mt-20 container mx-auto">
      <div className="space-y-6">
        <img className="w-96 h-52" src={image} alt="" />
      </div>
      <div>
        <h2>{name}</h2>
        <p> Price: {price}</p>
        <p>Taking Date: {date}</p>
        <p>Services Id: {id}</p>
      </div>
      <div className="w-28">
        <p className="bg-green-600 text-white p-1 font-bold text-center text-sm">
          Status: {status}
        </p>
      </div>
    </div>
  );
};

export default BookedService;
