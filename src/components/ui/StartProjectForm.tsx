import React, { useState } from "react";

type Props = {
  setToggle: (toggle: boolean) => void;
};
const StartProjectForm = ({ setToggle }: Props) => {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    projectDetails: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle submission (e.g., send to backend or show confirmation)
    console.log(formData);
    setToggle(false);
  };

  return (
    <div className="text-white w-full max-w-xl my-auto mx-auto p-6 bg-background rounded shadow-md relative">
      <h2 className="text-4xl font-bold tracking-tight mb-6 uppercase">
        Start a Project
      </h2>
      <div
        onClick={() => setToggle(false)}
        className="absolute top-0 right-0 p-5 text-2xl cursor-pointer"
      >
        x
      </div>

      <form onSubmit={handleSubmit} className="space-y-10">
        <div>
          <h3 className="text-lg font-semibold text-[#FC2804] mb-1">
            Contact details
          </h3>
          <p className="text-sm text-gray-600 mb-4">How can we contact you?</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              name="name"
              type="text"
              placeholder="Your name*"
              value={formData.name}
              onChange={handleChange}
              required
              className="border border-gray-300 rounded px-4 py-2 w-full"
            />
            <input
              name="company"
              type="text"
              placeholder="Company name*"
              value={formData.company}
              onChange={handleChange}
              required
              className="border border-gray-300 rounded px-4 py-2 w-full"
            />
            <input
              name="email"
              type="email"
              placeholder="Email address*"
              value={formData.email}
              onChange={handleChange}
              required
              className="border border-gray-300 rounded px-4 py-2 w-full"
            />
            <input
              name="phone"
              type="tel"
              placeholder="Mobile number*"
              value={formData.phone}
              onChange={handleChange}
              required
              className="border border-gray-300 rounded px-4 py-2 w-full"
            />
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-[#FC2804] mb-1">
            Project information
          </h3>
          <p className="text-sm text-gray-600 mb-4">
            Tell us more about your project.
          </p>
          <textarea
            name="projectDetails"
            rows={5}
            placeholder="Tell us more about your project...*"
            value={formData.projectDetails}
            onChange={handleChange}
            required
            className="border border-gray-300 rounded px-4 py-2 w-full"
          ></textarea>
        </div>

        <div className="text-right">
          <button
            type="submit"
            className="bg-[#FC2804] px-6 py-2 rounded font-semibold cursor-pointer"
          >
            Submit Enquiry
          </button>
        </div>
      </form>
    </div>
  );
};

export default StartProjectForm;
