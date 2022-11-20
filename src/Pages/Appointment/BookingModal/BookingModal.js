import { format } from "date-fns";
import React from "react";

const BookingModal = ({ treatment, selectedDate, setTreatment }) => {
  const date = format(selectedDate, "PP");
  const { name, slots } = treatment;
  const handleBooking = (event) => {
    event.preventDefault();
    const form = event.target;
    const patientName = form.name.value;
    const slot = form.slot.value;
    const email = form.email.value;
    const phone = form.phone.value;
    // console.log(slot, name, email, phone, date);
    const booking = {
      appointmentDate: date,
      treatment: name,
      patient: patientName,
      slot,
      email,
      phone,
    };
    setTreatment(null);
    form.reset();
  };
  return (
    <>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">
            ✕
          </label>
          <h3 className="text-lg font-bold">{name}</h3>
          <form
            onSubmit={handleBooking}
            className="grid grid-cols-1 gap-3 mt-2 bordered border-base-100"
          >
            <input type="text" disabled value={date} className="input w-full input-bordered" />
            <select name="slot" className="select select-bordered w-full">
              <option disabled selected>
                Select Time
              </option>
              {slots.map((slot, i) => (
                <option key={i} value={slot} selected>
                  {slot}
                </option>
              ))}
            </select>
            <input
              name="name"
              type="text"
              placeholder="Name"
              className="input w-full input-bordered "
            />
            <input
              name="email"
              type="email"
              placeholder="Email Address"
              className="input w-full input-bordered "
            />
            <input
              name="phone"
              type="number"
              placeholder="Phone Number"
              className="input w-full input-bordered "
            />
            <br />
            <input className="btn btn-accent w-full max-w-sm" type="submit" value="Submit" />
          </form>
        </div>
      </div>
    </>
  );
};

export default BookingModal;
