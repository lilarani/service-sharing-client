import { useState } from 'react';
import toast from 'react-hot-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    phone: '',
    message: '',
  });

  // Handle input changes
  const handleChange = e => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = e => {
    e.preventDefault();
    toast.success(`Form submitted successfully`);
    setFormData({
      name: '',
      email: '',
      subject: '',
      phone: '',
      message: '',
    });
  };

  return (
    <div className="my-24 container mx-auto ">
      <h2 className="font-bold text-3xl text-center" data-aos="zoom-in-down">
        Contact with Us
      </h2>
      <form onSubmit={handleSubmit}>
        <div className="space-y-6 w-4/5 mx-auto mt-24">
          <div className="flex flex-col gap-2 text-base font-semibold">
            <label htmlFor="name">
              Name
              <span className="text-red-500 font-bold ml-2">*</span>
            </label>
            <input
              className="border-2 p-2 focus:outline-none focus:border-purple-500 focus:shadow-sm "
              type="text"
              name="name"
              placeholder="enter your name"
              value={formData.name}
              onChange={handleChange}
              required
            />

            <label htmlFor="email">
              Email
              <span className="text-red-500 font-bold ml-2">*</span>
            </label>
            <input
              className="border-2 p-2 focus:outline-none focus:border-purple-500 focus:shadow-sm"
              type="text"
              name="email"
              placeholder="enter your email"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <label htmlFor="subject">
              Subject
              <span className="text-red-500 font-bold ml-2">*</span>
            </label>
            <input
              className="border-2 p-2 focus:outline-none focus:border-purple-500 focus:shadow-sm"
              type="text"
              name="subject"
              placeholder="subject"
              value={formData.subject}
              onChange={handleChange}
            />

            <label htmlFor="phone">Phone Number</label>
            <input
              className="border-2 p-2 focus:outline-none focus:border-purple-500 focus:shadow-sm"
              type="text"
              name="phone"
              placeholder="phone number"
              value={formData.phone}
              onChange={handleChange}
            />

            <textarea
              cols={30}
              rows={8}
              name="message"
              placeholder="write message"
              className="border-2 focus:outline-none focus:border-purple-500  focus:shadow-sm"
              value={formData.message}
              onChange={handleChange}
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-gradient-to-r from-violet-500 to-fuchsia-500 py-1 px-3 text-center text-white text-sm"
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
