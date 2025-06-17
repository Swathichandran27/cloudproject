/*import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useCart } from './CartContext';
import './Scheduler.css';

const Scheduler = () => {
  const { cartItems } = useCart();
  const [deliveryDate, setDeliveryDate] = useState(new Date());
  const [deliveryTime, setDeliveryTime] = useState(new Date());
  const [recurringDays, setRecurringDays] = useState([]);
  const [scheduleType, setScheduleType] = useState('single');
  const [recurringStartDate, setRecurringStartDate] = useState(new Date());
  const [recurringEndDate, setRecurringEndDate] = useState(null);
  const [recurringTime, setRecurringTime] = useState(new Date());
  const [scheduledDetails, setScheduledDetails] = useState(null);
  const [address, setAddress] = useState({ flatNo: '', street: '', city: '', postalCode: '', phoneNumber: '' });
  const [paymentMethod, setPaymentMethod] = useState('credit'); // Default payment method
  const [showAddressAndPayment, setShowAddressAndPayment] = useState(false);

  const handleDateChange = (date) => {
    setDeliveryDate(date);
  };

  const toggleRecurringDay = (day) => {
    if (recurringDays.includes(day)) {
      setRecurringDays(recurringDays.filter(d => d !== day));
    } else {
      setRecurringDays([...recurringDays, day]);
    }
  };

  const handleAddressChange = (e) => {
    const { name, value } = e.target;
    setAddress({ ...address, [name]: value });
  };

  const handleScheduleSubmit = () => {
    // Check if cart is empty
    if (cartItems.length === 0) {
      alert("Your cart is empty. Please add items to schedule a delivery.");
      return;
    }

    // Check if address fields are filled
    // Show address and payment options
    setShowAddressAndPayment(true);
    if (!address.flatNo || !address.street || !address.city || !address.postalCode || !address.phoneNumber) {
      alert("Please fill in all address fields.");
      return;
    }
  };

  const handleConfirmSchedule = async () => {
    const scheduleData = {
      items: cartItems,
      scheduleType: scheduleType,
      deliveryDate: scheduleType === 'single' ? deliveryDate : null,
      deliveryTime: scheduleType === 'single' ? deliveryTime : null,
      recurringDays: scheduleType === 'recurring' ? recurringDays : [],
      recurringStartDate: scheduleType === 'recurring' ? recurringStartDate : null,
      recurringEndDate: scheduleType === 'recurring' ? recurringEndDate : null,
      recurringTime: scheduleType === 'recurring' ? recurringTime : null,
      address,
      paymentMethod,
    };

    await fetch('http://localhost:5000/scheduler', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(scheduleData),
    });

    setScheduledDetails(scheduleData);
    // Reset fields after scheduling
    setDeliveryDate(new Date());
    setDeliveryTime(new Date());
    setRecurringDays([]);
    setRecurringStartDate(new Date());
    setRecurringEndDate(null);
    setRecurringTime(new Date());
    setScheduleType('single');
    setAddress({ flatNo: '', street: '', city: '', postalCode: '', phoneNumber: '' });
    setShowAddressAndPayment(false); // Hide the address and payment options

    alert('Your food delivery has been scheduled!');
  };

  return (
    <div className="scheduler-page-container">
      <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Schedule Your Food Delivery</h2>

      {cartItems.length === 0 ? (
        <div className="empty-cart-message">
          <p>Your cart is empty. Please add items to your cart to schedule a delivery.</p>
        </div>
      ) : (
        <>
          <div className="schedule-options">
            <label>
              <input
                type="radio"
                name="schedule-type"
                value="single"
                checked={scheduleType === 'single'}
                onChange={() => setScheduleType('single')}
              />
              Schedule for a Single Day
            </label>
            <label>
              <input
                type="radio"
                name="schedule-type"
                value="recurring"
                checked={scheduleType === 'recurring'}
                onChange={() => setScheduleType('recurring')}
              />
              Recurring Delivery (Weekly)
            </label>
          </div>

          {scheduleType === 'single' ? (
            <div className="single-day-scheduler">
              <h3>Select Delivery Date and Time:</h3>
              <DatePicker
                selected={deliveryDate}
                onChange={handleDateChange}
                minDate={new Date()}
                showTimeSelect
                dateFormat="MMMM d, yyyy h:mm aa"
                timeCaption="Time"
                placeholderText="Click to select date and time"
              />
            </div>
          ) : (
            <div className="recurring-scheduler">
              <h3>Select Recurring Delivery Days:</h3>
              <div className="recurring-days">
                {['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'].map((day) => (
                  <label key={day}>
                    <input
                      type="checkbox"
                      value={day}
                      checked={recurringDays.includes(day)}
                      onChange={() => toggleRecurringDay(day)}
                    />
                    {day}
                  </label>
                ))}
              </div>

              <h3>Select Start Date:</h3>
              <DatePicker
                selected={recurringStartDate}
                onChange={(date) => setRecurringStartDate(date)}
                minDate={new Date()}
                dateFormat="MMMM d, yyyy"
                placeholderText="Click to select start date"
              />

              <h3>Select End Date:</h3>
              <DatePicker
                selected={recurringEndDate}
                onChange={(date) => setRecurringEndDate(date)}
                minDate={recurringStartDate}
                dateFormat="MMMM d, yyyy"
                placeholderText="Click to select end date"
              />

              <h3>Select Delivery Time:</h3>
              <DatePicker
                selected={recurringTime}
                onChange={(date) => setRecurringTime(date)}
                showTimeSelect
                showTimeSelectOnly
                timeIntervals={30}
                timeCaption="Time"
                dateFormat="h:mm aa"
                placeholderText="Click to select time"
              />
            </div>
          )}

          <div className="cart-summary">
            <h3>Your Items to be Delivered:</h3>
            <ul>
              {cartItems.map((item) => (
                <li key={item.id}>
                  {item.name} - ₹{item.price}
                </li>
              ))}
            </ul>
          </div>

          <button className="schedule-btn" onClick={handleScheduleSubmit}>
            Make Schedule
          </button>

          {showAddressAndPayment && (
            <div className="address-payment-container">
              <h3>Enter Delivery Address:</h3>
              <input
                type="text"
                name="flatNo"
                placeholder="Flat No"
                value={address.flatNo}
                onChange={handleAddressChange}
              />
              <input
                type="text"
                name="street"
                placeholder="Street"
                value={address.street}
                onChange={handleAddressChange}
              />
              <input
                type="text"
                name="city"
                placeholder="City"
                value={address.city}
                onChange={handleAddressChange}
              />
              <input
                type="text"
                name="postalCode"
                placeholder="Postal Code"
                value={address.postalCode}
                onChange={handleAddressChange}
              />
              <input
                type="text"
                name="phoneNumber"
                placeholder="Phone Number"
                value={address.phoneNumber}
                onChange={handleAddressChange}
              />

              <h3>Select Payment Method:</h3>
              <label>
                <input
                  type="radio"
                  name="payment-method"
                  value="credit"
                  checked={paymentMethod === 'credit'}
                  onChange={() => setPaymentMethod('credit')}
                />
                Credit Card
              </label>
              <label>
                <input
                  type="radio"
                  name="payment-method"
                  value="debit"
                  checked={paymentMethod === 'debit'}
                  onChange={() => setPaymentMethod('debit')}
                />
                Debit Card
              </label>
              <label>
                <input
                  type="radio"
                  name="payment-method"
                  value="cash"
                  checked={paymentMethod === 'cash'}
                  onChange={() => setPaymentMethod('cash')}
                />
                Cash on Delivery
              </label>

              <button className="confirm-schedule-btn" onClick={handleConfirmSchedule}>
                Confirm Delivery Schedule
              </button>
            </div>
          )}

          {scheduledDetails && (
            <div className="scheduled-details">
              <h3>Scheduled Details:</h3>
              <p>Schedule Type: {scheduledDetails.scheduleType}</p>
              {scheduledDetails.scheduleType === 'single' && (
                <p>
                  Delivery Date: {scheduledDetails.deliveryDate.toDateString()} <br />
                  Delivery Time: {scheduledDetails.deliveryTime.toLocaleTimeString()}
                </p>
              )}
              {scheduledDetails.scheduleType === 'recurring' && (
                <>
                  <p>Recurring Days: {scheduledDetails.recurringDays.join(', ')}</p>
                  <p>Start Date: {scheduledDetails.recurringStartDate.toDateString()}</p>
                  <p>End Date: {scheduledDetails.recurringEndDate?.toDateString() || 'Not Set'}</p>
                  <p>Delivery Time: {scheduledDetails.recurringTime.toLocaleTimeString()}</p>
                </>
              )}
              <p>Delivery Address: {`${scheduledDetails.address.flatNo}, ${scheduledDetails.address.street}, ${scheduledDetails.address.city}, ${scheduledDetails.address.postalCode}`}</p>
              <p>Payment Method: {scheduledDetails.paymentMethod}</p>
              <ul>
                {scheduledDetails.items.map((item) => (
                  <li key={item.id}>
                    {item.name} - ₹{item.price}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Scheduler;*/
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useCart } from './CartContext';
import './Scheduler.css';
const Scheduler = () => {
  const { cartItems } = useCart();
  const [deliveryDate, setDeliveryDate] = useState(new Date());
  const [deliveryTime, setDeliveryTime] = useState(new Date());
  const [recurringDays, setRecurringDays] = useState([]);
  const [scheduleType, setScheduleType] = useState('single');
  const [recurringStartDate, setRecurringStartDate] = useState(new Date());
  const [recurringEndDate, setRecurringEndDate] = useState(null);
  const [recurringTime, setRecurringTime] = useState(new Date());
  const [scheduledDetails, setScheduledDetails] = useState(null);
  const [address, setAddress] = useState({
    flatNo: '',
    street: '',
    city: '',
    postalCode: '',
    phoneNumber: ''
  });
  const [paymentMethod, setPaymentMethod] = useState('credit');
  const [showAddressAndPayment, setShowAddressAndPayment] = useState(false);
  const handleDateChange = (date) => {
    setDeliveryDate(date);
  };
  const toggleRecurringDay = (day) => {
    if (recurringDays.includes(day)) {
      setRecurringDays(recurringDays.filter(d => d !== day));
    } else {
      setRecurringDays([...recurringDays, day]);
    }
  };
  const handleAddressChange = (e) => {
    const { name, value } = e.target;
    setAddress({ ...address, [name]: value });
  };
  const handleScheduleSubmit = () => {
    if (cartItems.length === 0) {
      alert("Your cart is empty. Please add items to schedule a delivery.");
      return;
    }
    setShowAddressAndPayment(true);
  };
  const handleConfirmSchedule = async () => {
    if (!address.flatNo || !address.street || !address.city || !address.postalCode || !address.phoneNumber) {
      alert("Please fill in all address fields.");
      return;
    }
    try {
      const scheduleData = {
        scheduleType: scheduleType,
        deliveryInfo: scheduleType === 'single'
          ? {
              deliveryDate: deliveryDate.toISOString(),
              deliveryTime: deliveryTime.toISOString()
            }
          : {
              recurringDays: recurringDays,
              startDate: recurringStartDate.toISOString(),
              endDate: recurringEndDate?.toISOString(),
              recurringTime: recurringTime.toISOString()
            },
        address: address,
        paymentMethod: paymentMethod,
        items: cartItems.map(item => ({
          id: item.id,
          name: item.name,
          price: item.price
        }))
      };
      const response = await fetch('https://po136ctdyf.execute-api.us-east-2.amazonaws.com/dev', {
        method: 'POST',
        mode:'cors',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(scheduleData)
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const result = await response.json();
      console.log('Schedule created:', result);
      setScheduledDetails(scheduleData);
      // Reset form
      setDeliveryDate(new Date());
      setDeliveryTime(new Date());
      setRecurringDays([]);
      setRecurringStartDate(new Date());
      setRecurringEndDate(null);
      setRecurringTime(new Date());
      setScheduleType('single');
      setAddress({ flatNo: '', street: '', city: '', postalCode: '', phoneNumber: '' });
      setShowAddressAndPayment(false);
      alert('Your food delivery has been scheduled!');
    } catch (error) {
      console.error('Error:', error);
      alert('Failed to schedule delivery: ' + error.message);
    }
  };
  return (
    <div className="scheduler-page-container">
      <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Schedule Your Food Delivery</h2>
      {cartItems.length === 0 ? (
        <div className="empty-cart-message">
          <p>Your cart is empty. Please add items to your cart to schedule a delivery.</p>
        </div>
      ) : (
        <>
          <div className="schedule-options">
            <label>
              <input
                type="radio"
                name="schedule-type"
                value="single"
                checked={scheduleType === 'single'}
                onChange={() => setScheduleType('single')}
              />
              Schedule for a Single Day
            </label>
            <label>
              <input
                type="radio"
                name="schedule-type"
                value="recurring"
                checked={scheduleType === 'recurring'}
                onChange={() => setScheduleType('recurring')}
              />
              Recurring Delivery (Weekly)
            </label>
          </div>
          {scheduleType === 'single' ? (
            <div className="single-day-scheduler">
              <h3>Select Delivery Date and Time:</h3>
              <DatePicker
                selected={deliveryDate}
                onChange={handleDateChange}
                minDate={new Date()}
                showTimeSelect
                dateFormat="MMMM d, yyyy h:mm aa"
                timeCaption="Time"
                placeholderText="Click to select date and time"
              />
            </div>
          ) : (
            <div className="recurring-scheduler">
              <h3>Select Recurring Delivery Days:</h3>
              <div className="recurring-days">
                {['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'].map((day) => (
                  <label key={day}>
                    <input
                      type="checkbox"
                      value={day}
                      checked={recurringDays.includes(day)}
                      onChange={() => toggleRecurringDay(day)}
                    />
                    {day}
                  </label>
                ))}
              </div>
              <h3>Select Start Date:</h3>
              <DatePicker
                selected={recurringStartDate}
                onChange={(date) => setRecurringStartDate(date)}
                minDate={new Date()}
                dateFormat="MMMM d, yyyy"
                placeholderText="Click to select start date"
              />
              <h3>Select End Date:</h3>
              <DatePicker
                selected={recurringEndDate}
                onChange={(date) => setRecurringEndDate(date)}
                minDate={recurringStartDate}
                dateFormat="MMMM d, yyyy"
                placeholderText="Click to select end date"
              />
              <h3>Select Delivery Time:</h3>
              <DatePicker
                selected={recurringTime}
                onChange={(date) => setRecurringTime(date)}
                showTimeSelect
                showTimeSelectOnly
                timeIntervals={30}
                timeCaption="Time"
                dateFormat="h:mm aa"
                placeholderText="Click to select time"
              />
            </div>
          )}
          <div className="cart-summary">
            <h3>Your Items to be Delivered:</h3>
            <ul>
              {cartItems.map((item, index) => (
                <li key={index}>
                  {item.name} - ₹{item.price}
                </li>
              ))}
            </ul>
          </div>
          <button className="schedule-btn" onClick={handleScheduleSubmit}>
            Make Schedule
          </button>
          {showAddressAndPayment && (
            <div className="address-payment-container">
              <h3>Enter Delivery Address:</h3>
              <input
                type="text"
                name="flatNo"
                placeholder="Flat No"
                value={address.flatNo}
                onChange={handleAddressChange}
              />
              <input
                type="text"
                name="street"
                placeholder="Street"
                value={address.street}
                onChange={handleAddressChange}
              />
              <input
                type="text"
                name="city"
                placeholder="City"
                value={address.city}
                onChange={handleAddressChange}
              />
              <input
                type="text"
                name="postalCode"
                placeholder="Postal Code"
                value={address.postalCode}
                onChange={handleAddressChange}
              />
              <input
                type="text"
                name="phoneNumber"
                placeholder="Phone Number"
                value={address.phoneNumber}
                onChange={handleAddressChange}
              />
              <h3>Select Payment Method:</h3>
              <label>
                <input
                  type="radio"
                  name="payment-method"
                  value="credit"
                  checked={paymentMethod === 'credit'}
                  onChange={() => setPaymentMethod('credit')}
                />
                Credit Card
              </label>
              <label>
                <input
                  type="radio"
                  name="payment-method"
                  value="debit"
                  checked={paymentMethod === 'debit'}
                  onChange={() => setPaymentMethod('debit')}
                />
                Debit Card
              </label>
              <label>
                <input
                  type="radio"
                  name="payment-method"
                  value="cash"
                  checked={paymentMethod === 'cash'}
                  onChange={() => setPaymentMethod('cash')}
                />
                Cash on Delivery
              </label>
              <button className="confirm-schedule-btn" onClick={handleConfirmSchedule}>
                Confirm Delivery Schedule
              </button>
            </div>
          )}
          {scheduledDetails && (
            <div className="scheduled-details">
              <h3>Scheduled Details:</h3>
              <p>Schedule Type: {scheduledDetails.scheduleType}</p>
              {scheduledDetails.scheduleType === 'single' ? (
                <p>
                  Delivery Date: {new Date(scheduledDetails.deliveryInfo.deliveryDate).toDateString()} <br />
                  Delivery Time: {new Date(scheduledDetails.deliveryInfo.deliveryTime).toLocaleTimeString()}
                </p>
              ) : (
                <>
                  <p>Recurring Days: {scheduledDetails.deliveryInfo.recurringDays.join(', ')}</p>
                  <p>Start Date: {new Date(scheduledDetails.deliveryInfo.startDate).toDateString()}</p>
                  <p>End Date: {scheduledDetails.deliveryInfo.endDate ? new Date(scheduledDetails.deliveryInfo.endDate).toDateString() : 'Not Set'}</p>
                  <p>Delivery Time: {new Date(scheduledDetails.deliveryInfo.recurringTime).toLocaleTimeString()}</p>
                </>
              )}
              <p>Delivery Address: {`${scheduledDetails.address.flatNo}, ${scheduledDetails.address.street}, ${scheduledDetails.address.city}, ${scheduledDetails.address.postalCode}`}</p>
              <p>Payment Method: {scheduledDetails.paymentMethod}</p>
              <ul>
                {scheduledDetails.items.map((item, index) => (
                  <li key={index}>
                    {item.name} - ₹{item.price}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </>
      )}
    </div>
  );
};
export default Scheduler;






