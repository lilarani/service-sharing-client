const Blog = () => {
  return (
    <div className="p-6 container mx-auto ">
      <h1 className="text-3xl font-bold text-center mb-8">Our Service Blog</h1>

      {/* Cleaning Services */}
      <div className="mb-6 flex flex-col md:flex-row items-center mt-16">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXe36mRdjgddqkA1XxJDqLeYZ9s6HYDce7JKMs31Vsm-5LoNw&s"
          alt="Cleaning Services"
          className="w-full md:w-1/3 h-64 object-cover mr-6"
        />
        <div>
          <h2 className="text-2xl font-semibold">Cleaning Services</h2>
          <p className="text-base mt-2">
            At our cleaning service, we provide professional and efficient
            cleaning for homes and offices. Our team uses eco-friendly products
            to ensure the best results. Whether it's a one-time deep cleaning or
            regular maintenance, we are here to help.
          </p>
        </div>
      </div>

      {/* Cooking Services */}
      <div className="mb-6 flex flex-col md:flex-row  items-center">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_hMqB3yelUA6cNJc0Riw6OP-X-FZhUkffpZOodXzjRoRqMHU&s"
          alt="Cooking Services"
          className="w-full md:w-1/3 h-64 object-cover mr-6"
        />
        <div>
          <h2 className="text-2xl font-semibold">Cooking Services</h2>
          <p className="text-base mt-2">
            Our cooking services are designed to make your life easier. We
            provide a variety of meal options tailored to your preferences. From
            healthy meals to traditional dishes, let us bring the taste of
            delicious home-cooked meals to your kitchen.
          </p>
        </div>
      </div>

      {/* Home Services */}
      <div className="mb-6 flex flex-col md:flex-row items-center">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYuTBe7g-CVWmRmwtDYv3N9UxgehNRO8ZppEFeGyKlanvlIgKU&s"
          alt="Home Services"
          className="w-full md:w-1/3 h-64 object-cover mr-6"
        />
        <div>
          <h2 className="text-2xl font-semibold">Home Services</h2>
          <p className="text-base mt-2">
            Need help with home repairs or installations? Our home services
            include plumbing, electrical, carpentry, and more. Our experts will
            take care of all your home needs so you can relax and enjoy a
            hassle-free life.
          </p>
        </div>
      </div>

      {/* Salon Treatments */}
      <div className="mb-6 flex flex-col md:flex-row  items-center">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTC2zfrv2uYqw5uL3rIuZyFfAw52_ddj8XEY1K07VmGdEu7kEvy&s"
          alt="Salon Treatments"
          className="w-full md:w-1/3 h-64 object-cover mr-6"
        />
        <div>
          <h2 className="text-2xl font-semibold">Salon Treatments</h2>
          <p className="text-base mt-2">
            Our salon offers a variety of beauty treatments to pamper you. From
            haircuts and styling to facials and spa services, we provide
            personalized treatments for every client. Our expert team will
            ensure you leave feeling relaxed and looking your best.
          </p>
        </div>
      </div>

      {/* Beauty Parlour Services */}
      <div className="mb-6 flex flex-col md:flex-row  items-center">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVl4ikM8aD8dR0z3q0hbB-aHKp9Bd_Irvq1bjpqq21Tgz9DG0&s"
          alt="Beauty Parlour Services"
          className="w-full md:w-1/3 h-64 object-cover mr-6"
        />
        <div>
          <h2 className="text-2xl font-semibold">Beauty Parlour Services</h2>
          <p className="text-base mt-2">
            At our beauty parlour, we offer professional beauty treatments
            including makeup, skincare, hair removal, and more. Whether it's for
            a special occasion or regular grooming, our skilled beauticians are
            here to enhance your natural beauty with high-quality products and
            services.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
