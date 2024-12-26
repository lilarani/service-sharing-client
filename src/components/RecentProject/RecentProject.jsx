import cleaning from '../../assets/images/cleaning-befor-after.jpeg';
import gallery from '../../assets/images/Gallery of House HEIDE.jpg';
import houseRepair from '../../assets/images/houseRepair.jpeg';
import painting from '../../assets/images/img.jpg';
import wallRepair from '../../assets/images/wll repair.jpg';
import hair from '../../assets/images/hair.jpeg';
import 'aos/dist/aos.css';

const RecentProject = () => {
  return (
    <div className="container mx-auto my-24">
      <h2
        className="text-3xl font-bold text-center"
        data-aos="fade-right"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"
      >
        Our Recent Projects
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 hover:gap-10 mt-14">
        <div className="relative group">
          <img
            className="w-full h-96 border-purple-600 border-2 shadow-md transform transition-transform duration-300 group-hover:scale-110"
            src={cleaning}
            alt=""
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <p className="text-white text-xl font-bold">Cleaning Project</p>
          </div>
        </div>

        <div className="relative group">
          <img
            className="w-full h-96 border-purple-600 border-2 shadow-md transform transition-transform duration-300 group-hover:scale-110"
            src={gallery}
            alt=""
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <p className="text-white text-xl font-bold">Gallery Project</p>
          </div>
        </div>

        <div className="relative group">
          <img
            className="w-full h-96 border-purple-600 border-2 shadow-md transform transition-transform duration-300 group-hover:scale-110"
            src={houseRepair}
            alt=""
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <p className="text-white text-xl font-bold">House Repair</p>
          </div>
        </div>

        <div className="relative group">
          <img
            className="w-full h-96 border-purple-600 border-2 shadow-md transform transition-transform duration-300 group-hover:scale-110"
            src={painting}
            alt=""
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <p className="text-white text-xl font-bold">Painting</p>
          </div>
        </div>

        <div className="relative group">
          <img
            className="w-full h-96 border-purple-600 border-2 shadow-md transform transition-transform duration-300 group-hover:scale-110"
            src={wallRepair}
            alt=""
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <p className="text-white text-xl font-bold">Wall Repair</p>
          </div>
        </div>

        <div className="relative group">
          <img
            className="w-full h-96 border-purple-600 border-2 shadow-md transform transition-transform duration-300 group-hover:scale-110"
            src={hair}
            alt=""
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <p className="text-white text-xl font-bold">Hair Care</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentProject;
