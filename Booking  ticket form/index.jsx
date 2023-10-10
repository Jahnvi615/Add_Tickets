import React, { useState } from 'react';

function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    people: '',
    time: '',
    date: '',
    number: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can add your form submission logic here
    console.log(formData);
  };

  return (
    <div className="main_bg">
      <div className="container">
        <div className="form">
          <div className="form-text">
            <h1>
              <span>
                <img src="art-1.png" alt="" />
              </span>
              Book Now{' '}
              <span>
                <img src="art-1.png" alt="" />
              </span>
            </h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, fugit.</p>
          </div>
          <div className="main-form">
            <form onSubmit={handleSubmit}>
              <div>
                <span>Your full name ?</span>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Write your name here..."
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <span>Your email address ?</span>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Write your email here..."
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <span>How many people ?</span>
                <select
                  name="people"
                  id="people"
                  value={formData.people}
                  onChange={handleChange}
                  required
                >
                  <option value="">---People---</option>
                  <option value="1">1 People</option>
                  <option value="2">2 People</option>
                  <option value="3">3 People</option>
                  <option value="4">4 People</option>
                </select>
              </div>
              <div>
                <span>What time ?</span>
                <input
                  type="text"
                  name="time"
                  id="time"
                  placeholder="Time"
                  value={formData.time}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <span>What is the date ?</span>
                <input
                  type="date"
                  name="date"
                  id="date"
                  placeholder="date"
                  value={formData.date}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <span>Your phone number ?</span>
                <input
                  type="number"
                  name="number"
                  id="number"
                  placeholder="Write your number here..."
                  value={formData.number}
                  onChange={handleChange}
                  required
                />
              </div>
              <div id="submit">
                <input type="submit" value="SUBMIT" id="submit" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
