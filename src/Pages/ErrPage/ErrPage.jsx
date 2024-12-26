import { ImCross } from 'react-icons/im';

const ErrPage = () => {
  return (
    <div className=" flex justify-center items-center mt-28 bg-white">
      <div className="card bg-base-100 w-[600px] shadow-xl ">
        <div className="flex justify-center items-center ">
          <ImCross className="w-96 text-red" />
        </div>
        <div className="card-body items-center text-center">
          <h2 className="card-title text-5xl text-red-600">Not Found</h2>
        </div>
      </div>
    </div>
  );
};

export default ErrPage;
