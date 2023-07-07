import React, { useState } from "react";

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    age: "",
    gender: "",
    address: "",
    country: "",
    interests: [],
    agree: false,
  });
  const handleInputChange = (event) => {
    const target = event.target;
    // const value = target.value;
    const name = target.name;
    const value = target.type === "checkbox" ? target.checked : target.value;
    // setFormData((prevData) => ({
    //   ...prevData,
    //   [name]: value,
    // }));
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleInterestChange = (event) => {
  
    const { options } = event.target;
      const selectedValue = [];
    for (let i = 0; i < options.length; i++) {
      if (options[i].selected) {
        selectedValue.push(options[i].value);
      }
    }
    setFormData((prevData) => ({
      ...prevData,
      interests: selectedValue,
    }));
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);

    // setFormData({
    //   name: "",
    //   email: "",
    //   age: "",
    //   gender: "",
    //   address: "",
    //   country: "",
    //   interests: "",
    // });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Age:
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Gender:
          <select
            aria-label="Default select example"
            name="gender"
            value={formData.gender}
            onChange={handleInputChange}
          >
            <option>Open this select menu</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </label>
        <br />
        <label>
          Address:
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Country:
          <input
            type="text"
            name="country"
            value={formData.country}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Interest:
          {/* <select
            name="interests"
            value={formData.interests}
            onChange={handleInterestChange}
          >
            <option value="football">Football</option>
            <option value="music">Music</option>
            <option value="reading">Reading</option>
            <option value="gaming">Gaming</option>
            <option value="travel">Traveling</option>
          </select> */}
          <select
            name="interests"
            multiple
            value={formData.interests}
            onChange={handleInterestChange}
          >
            <option value="music">Music</option>
            <option value="sports">Sports</option>
            <option value="reading">Reading</option>
            <option value="travel">Travelling</option>
          </select>
        </label>
        <br />
        <label>
          Agreed to :
          <input
            type="checkbox"
            name="agree"
            value={formData.agree}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>

      <div>
        <h1>All Data</h1>
        <p>Name: {formData.name}</p>
        <p>Email: {formData.email}</p>
        <p>Age: {formData.age}</p>
        <p>Gender: {formData.gender}</p>
        <p>Address: {formData.address}</p>
        <p>Country: {formData.country}</p>
        <p>Interests:{formData.interests.join(",")}</p>
        <p>Agree: {formData.agree ? "Yes" : "No"}</p>
      </div>
    </div>
  );
};

export default Form;
