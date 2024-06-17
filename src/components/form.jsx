import React, { useState } from "react";

function AddressForm({ onAddAddress }) {
  const [address, setAddress] = useState({
    street: "",
    city: "",
    postalCode: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAddress((prevAddress) => ({
      ...prevAddress,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!address.street || !address.city || !address.postalCode) {
      setError("Please fill out all fields.");
      return;
    }
    if (!/^\d{5}$/.test(address.postalCode)) {
      setError("Postal code should be 5 digits.");
      return;
    }
    onAddAddress(address);
    setAddress({
      street: "",
      city: "",
      postalCode: "",
    });
    setError("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input
          type="text"
          name="street"
          placeholder="Enter street"
          value={address.street}
          onChange={handleChange}
        />
      </div>
      <div>
        <input
          type="text"
          name="city"
          placeholder="Enter city"
          value={address.city}
          onChange={handleChange}
        />
      </div>
      <div>
        <input
          type="text"
          name="postalCode"
          placeholder="Enter postal code"
          max={5}
          value={address.postalCode}
          onChange={handleChange}
        />
      </div>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <button type="submit">Add Address</button>
    </form>
  );
}

function AddressList({ addresses }) {
  return (
    <ul>
      {addresses.map((address, index) => (
        <li key={index}>
          <p>Street: {address.street}</p>
          <p>City: {address.city}</p>
          <p>Postal Code: {address.postalCode}</p>
        </li>
      ))}
    </ul>
  );
}

function FormError() {
  const [addresses, setAddresses] = useState([]);

  const handleAddAddress = (newAddress) => {
    setAddresses((prevAddresses) => [...prevAddresses, newAddress]);
  };

  return (
    <div>
      <h2>Address Form</h2>
      <AddressForm onAddAddress={handleAddAddress} />
      <h2>Address List</h2>
      <AddressList addresses={addresses} />
    </div>
  );
}

export default FormError;
