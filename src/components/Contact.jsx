import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    budget: "",
    description: "",
    file: null,
  });

  const [errors, setErrors] = useState({});

  const budgetOptions = [
    "Less than $5,000",
    "$5000 - $10,000",
    "$10,000 - $50,000",
    "More than $50,000",
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: "" });
  };

  const handlePhoneChange = (value) => {
    setFormData({ ...formData, phone: value });
    setErrors({ ...errors, phone: "" });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, file: e.target.files[0] });
    setErrors({ ...errors, file: "" });
  };

  const validateForm = () => {
    let newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required.";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Enter a valid email address.";
    }
    if (!formData.phone.trim() || formData.phone.length < 8) {
      newErrors.phone = "Valid contact number is required.";
    }
    if (!formData.budget.trim()) newErrors.budget = "Please select a budget.";
    if (!formData.description.trim())
      newErrors.description = "Description is required.";
    if (!formData.file) newErrors.file = "Please attach a file.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form submitted successfully:", formData);
      alert("Form submitted successfully!");
    }
  };

  return (
    <section className="xl:pb-20 lg:pb-16 sm:pb-14 pb-10 pt-20">
      <div className="container">
        <div className="flex items-center gap-10 flex-wrap">
          <div className="w-full xlg:w-[calc(50%-20px)] space-y-5">
            <h2>LET'S MAKE YOUR PROJECT ATTRACTIVE</h2>

            <div className="text-black-l-200">
              If you have a project in mind that needs designing expertise then
              you are in the right place. Hire us for a UI/UX design project and
              add life into your design.
            </div>
          </div>
          <form
            onSubmit={handleSubmit}
            className="space-y-7 bg-blue-l-900 rounded-lg p-8 w-full xlg:w-[calc(50%-20px)]"
          >
            <div>
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-2 bg-transparent border-b-2 text-p text-black-l-200 placeholder:text-p placeholder:text-black-l-200 border-solid border-black-l-200 focus:outline-none"
              />
              {errors.name && (
                <p className="text-red-700 pt-1 text-sm">{errors.name}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium"></label>
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-2 bg-transparent border-b-2 text-p text-black-l-200 placeholder:text-p placeholder:text-black-l-200 border-solid border-black-l-200 focus:outline-none"
              />
              {errors.email && (
                <p className="text-red-700 pt-1 text-sm">{errors.email}</p>
              )}
            </div>

            <div className="phone-number">
              <PhoneInput
                country={"in"}
                value={formData.phone}
                onChange={handlePhoneChange}
                inputClass="w-full p-2 !bg-transparent !border-t-0 !border-l-0 !border-r-0 !rounded-none !border-b-2 !border-black-l-200 !text-p !pl-[60px] "
                className="font-jost"
              />
              {errors.phone && (
                <p className="text-red-700 pt-1 text-sm">{errors.phone}</p>
              )}
            </div>

            <div>
              <select
                name="budget"
                value={formData.budget}
                onChange={handleChange}
                className="w-full p-2 bg-transparent border-b-2 text-p text-black-l-200 placeholder:text-p placeholder:text-black-l-200 border-solid border-black-l-200 focus:outline-none"
              >
                <option value="" className="text-p text-black">
                  Select a budget range
                </option>
                {budgetOptions.map((option, index) => (
                  <option
                    key={index}
                    value={option}
                    className="text-p text-black"
                  >
                    {option}
                  </option>
                ))}
              </select>
              {errors.budget && (
                <p className="text-red-700 pt-1 text-sm">{errors.budget}</p>
              )}
            </div>

            <div>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                placeholder="Project Description"
                rows="4"
                className="w-full p-2 bg-transparent border-b-2 text-p text-black-l-200 placeholder:text-p placeholder:text-black-l-200 border-solid border-black-l-200 focus:outline-none resize-none h-[150px]"
              ></textarea>
              {errors.description && (
                <p className="text-red-700 pt-1 text-sm">
                  {errors.description}
                </p>
              )}
            </div>

            <div>
              <label className="block text-p text-black-l-200">
                Attach File
              </label>
              <input
                type="file"
                onChange={handleFileChange}
                className="w-full p-2 px-0 bg-transparent border-b-2 text-p text-black-l-200 placeholder:text-p placeholder:text-black-l-200 border-solid border-black-l-200 focus:outline-none"
              />
              {errors.file && (
                <p className="text-red-700 pt-1 text-sm">{errors.file}</p>
              )}
            </div>

            <button
              type="submit"
              className="btn border-blue-l-300 text-blue-l-300 hover:bg-blue-l-300"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
