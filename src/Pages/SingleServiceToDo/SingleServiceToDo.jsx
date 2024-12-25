const SingleServiceToDo = ({ service }) => {
  const {
    servicesName: name,
    servicesImage: img,
    instructions,
    takingDate,
    servicesPrice,
    providerName,
    providerImage,
  } = service;

  const handleServiceStatus = e => {};

  return (
    <div className="card bg-base-100  shadow-xl">
      <figure>
        <img src={img} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>Instructions: {instructions}</p>
        <p>Taking Date: {takingDate}</p>
        <p>Service Price: {servicesPrice}</p>
        <div>
          <select onChange={handleServiceStatus} className="border-2">
            <option value="pending">Pending</option>
            <option value="working">Working</option>
            <option value="completed">Completed</option>
          </select>
        </div>
        <div className="flex items-center gap-2">
          <div>
            <img
              className="h-10 w-10 rounded-full "
              src={providerImage}
              alt=""
            />
          </div>
          <div>
            <p>{providerName}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleServiceToDo;
