import React, { useState } from 'react';
import logo from '../../assets/backgroundyok.png'

const Register = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [birthday, setBirthday] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [acceptTerms, setAcceptTerms] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (acceptTerms) {
      if (password === repeatPassword) {
        // Here, you can perform actions like sending data to a server or updating state.
        const formData = {
          firstName,
          lastName,
          email,
          address,
          phoneNumber,
          birthday,
          password,
        };
        console.log('Submitted data:', formData);
      } else {
        console.log('Passwords do not match.');
      }
    } else {
      console.log('Please accept the terms and conditions.');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-6 bg-white rounded shadow-md">
        <div className='flex items-center justify-center mb-6'>
           <img src={logo} className='w-[100px] h-[100px] relative  ' />
        </div>
        <h2 className="text-2xl font-semibold mb-4">Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-2 gap-4">
            <div className="mb-4">
              <label className="block text-gray-700 font-semibold mb-2" htmlFor="firstName">First Name</label>
              <input
                type="text"
                id="firstName"
                className="w-full p-2 border rounded-md"
                placeholder="Enter your first name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-semibold mb-2" htmlFor="lastName">Last Name</label>
              <input
                type="text"
                id="lastName"
                className="w-full p-2 border rounded-md"
                placeholder="Enter your last name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2" htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              className="w-full p-2 border rounded-md"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2" htmlFor="address">Address</label>
            <input
              type="text"
              id="address"
              className="w-full p-2 border rounded-md"
              placeholder="Enter your address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2" htmlFor="phoneNumber">Phone Number</label>
            <input
              type="tel"
              id="phoneNumber"
              className="w-full p-2 border rounded-md"
              placeholder="Enter your phone number"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2" htmlFor="birthday">Birthday</label>
            <input
              type="date"
              id="birthday"
              className="w-full p-2 border rounded-md"
              value={birthday}
              onChange={(e) => setBirthday(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2" htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              className="w-full p-2 border rounded-md"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2" htmlFor="repeatPassword">Repeat Password</label>
            <input
              type="password"
              id="repeatPassword"
              className="w-full p-2 border rounded-md"
              placeholder="Repeat your password"
              value={repeatPassword}
              onChange={(e) => setRepeatPassword(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="flex items-center text-gray-700">
              <input
                type="checkbox"
                className="mr-2"
                checked={acceptTerms}
                onChange={() => setAcceptTerms(!acceptTerms)}
              />
              I accept the terms and conditions.
            </label>
          </div>
          <button
            type="submit"
            className={`w-full bg-red-500 text-white p-2 rounded-md hover:bg-red-600 ${acceptTerms ? '' : 'opacity-50 cursor-not-allowed'}`}
            disabled={!acceptTerms}
            style={{ backgroundColor: '#EB1313' }}
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
