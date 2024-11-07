import React, { useState } from 'react';
import './AddressForm.css'; // Assuming separate styling for the form

const AddressForm = ({ closeModal, saveAddress }) => {
  const [addressDetails, setAddressDetails] = useState({
    name: '',
    phoneNumber: '',
    flatNo: '',
    street: '',
    city: '',
    postalCode: '',
    landmark: '',
    addressType: 'Home',
  });

  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setAddressDetails({ ...addressDetails, [name]: value });
  };

  const validateForm = () => {
    let formErrors = {};
    const phoneRegex = /^[0-9]{10}$/; // Ensures 10 digit phone number
    const postalCodeRegex = /^[0-9]{6}$/; // Ensures 6 digit postal code

    if (!addressDetails.name) {
      formErrors.name = 'Name is required';
    }
    if (!addressDetails.phoneNumber || !phoneRegex.test(addressDetails.phoneNumber)) {
      formErrors.phoneNumber = 'Phone number must be 10 digits';
    }
    if (!addressDetails.flatNo) {
      formErrors.flatNo = 'Flat No. is required';
    }
    if (!addressDetails.street) {
      formErrors.street = 'Street is required';
    }
    if (!addressDetails.city) {
      formErrors.city = 'City is required';
    }
    if (!addressDetails.postalCode || !postalCodeRegex.test(addressDetails.postalCode)) {
      formErrors.postalCode = 'Postal code must be 6 digits';
    }

    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Pass address details to the save function
      saveAddress(addressDetails);
      closeModal();
    }
  };

  return (
    <div className="address-form-modal">
      <div className="address-form-container">
        <h3>Save Delivery Address</h3>
        <form onSubmit={handleSubmit}>
          <label>
            Name
            <input
              type="text"
              name="name"
              value={addressDetails.name}
              onChange={handleInputChange}
              required
            />
            {errors.name && <span className="error">{errors.name}</span>}
          </label>
          <label>
            Phone Number:
            <input
              type="text"
              name="phoneNumber"
              value={addressDetails.phoneNumber}
              onChange={handleInputChange}
              required
            />
            {errors.phoneNumber && <span className="error">{errors.phoneNumber}</span>}
          </label>
          <label>
            Flat No. / House No.:
            <input
              type="text"
              name="flatNo"
              value={addressDetails.flatNo}
              onChange={handleInputChange}
              required
            />
            {errors.flatNo && <span className="error">{errors.flatNo}</span>}
          </label>
          <label>
            Street / Locality:
            <input
              type="text"
              name="street"
              value={addressDetails.street}
              onChange={handleInputChange}
              required
            />
            {errors.street && <span className="error">{errors.street}</span>}
          </label>
          <label>
            City:
            <input
              type="text"
              name="city"
              value={addressDetails.city}
              onChange={handleInputChange}
              required
            />
            {errors.city && <span className="error">{errors.city}</span>}
          </label>
          <label>
            Postal Code:
            <input
              type="text"
              name="postalCode"
              value={addressDetails.postalCode}
              onChange={handleInputChange}
              required
            />
            {errors.postalCode && <span className="error">{errors.postalCode}</span>}
          </label>
          <label>
            Landmark (Optional):
            <input
              type="text"
              name="landmark"
              value={addressDetails.landmark}
              onChange={handleInputChange}
            />
          </label>
          <div className="address-type">
            <p>Address Type:</p>
            <label>
              <input
                type="radio"
                name="addressType"
                value="Home"
                checked={addressDetails.addressType === 'Home'}
                onChange={handleInputChange}
              />
              Home
            </label>
            <label>
              <input
                type="radio"
                name="addressType"
                value="Work"
                checked={addressDetails.addressType === 'Work'}
                onChange={handleInputChange}
              />
              Work
            </label>
            <label>
              <input
                type="radio"
                name="addressType"
                value="Other"
                checked={addressDetails.addressType === 'Other'}
                onChange={handleInputChange}
              />
              Other
            </label>
          </div>
          <button type="submit" className="save-address-btn">
            Save Address & Proceed
          </button>
          <button type="button" className="cancel-btn" onClick={closeModal}>
            Cancel
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddressForm;
