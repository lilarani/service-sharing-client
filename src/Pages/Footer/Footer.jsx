import { CiFacebook, CiLinkedin } from 'react-icons/ci';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6">
      <div className="container mx-auto flex flex-col justify-center items-center text-center">
        <div>
          <h3 className="text-2xl font-bold">Service Sharing</h3>
          <p className="mt-2 text-sm text-gray-400 ">
            Discover and share a wide range of services tailored to meet your
            unique needs. <br /> From professional assistance to everyday
            essentials, we bring everything closer to you!
          </p>
        </div>

        <div>
          <h3 className="text-xl font-bold">Follow Us</h3>
          <ul className="flex justify-center md:justify-start space-x-4 mt-2 text-3xl">
            <li>
              <a
                href="https://www.facebook.com/neelaa.rani"
                target="_blank"
                className="hover:text-blue-500"
              >
                <CiFacebook />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/neela-rani"
                target="_blank"
                className="hover:text-blue-400"
              >
                <CiLinkedin />
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-6 text-center border-t border-gray-700 pt-4 text-sm">
        <p>&copy; 2024 Service-Sharing. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
