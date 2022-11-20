import React from "react";

const AppointmentOption = ({ option, setTreatment }) => {
  const { name, slots } = option;

  return (
    <div className="card bg-base-100 shadow-xl">
      <div className="card-body text-center">
        <h2 className="font-bold text-secondary text-center">{name}</h2>
        <p>{slots.length > 0 ? slots[0] : "Try Another Day"}</p>
        <p>{slots.length} spaces available</p>
        <div className="card-actions justify-center">
          <label
            disabled={slots.length === 0}
            onClick={() => setTreatment(option)}
            htmlFor="booking-modal"
            className="btn btn-primary"
          >
            Book Appointment
          </label>
        </div>
      </div>
    </div>
  );
};

export default AppointmentOption;
