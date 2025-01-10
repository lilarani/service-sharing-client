import Lottie from 'lottie-react';
import animation from '../../../public/lottieAnimation.json';
import { Helmet } from 'react-helmet-async';

const AboutUs = () => {
  return (
    <div className="my-24 container mx-auto">
      <Helmet>
        <title>Service-Sharing | About Us</title>
      </Helmet>
      <h2 className="text-center text-4xl font-semibold">About Us</h2>
      <div className="grid grid-cols-12 mt-10">
        <div className="col-span-6 mt-20">
          <p className="text-base text-justify">
            {' '}
            Welcome to our organization! We are dedicated to delivering
            high-quality services and innovative solutions to meet your needs.
            Our team of passionate professionals works tirelessly to ensure
            customer satisfaction and continuous improvement. With a commitment
            to excellence and a vision for the future, we strive to create
            meaningful and lasting impact in everything we do. Join us on this
            journey of growth, innovation, and success!
          </p>
        </div>
        <div className="col-span-6">
          <Lottie
            animationData={animation}
            loop={true}
            autoPlay={true}
          ></Lottie>
        </div>
      </div>

      <h3 className="text-center font-semibold text-xl">Meet Our Team</h3>
    </div>
  );
};

export default AboutUs;
