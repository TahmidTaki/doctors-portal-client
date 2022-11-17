import React from "react";
import doctor from "../../../assets/images/doctor.png";
import appointment from "../../../assets/images/appointment.png";
import PrimaryButton from "../../components/PrimaryButton/PrimaryButton";

const MakeAppointment = () => {
  return (
    <section style={{ background: `url(${appointment})` }}>
      <div className="hero mt-16">
        <div className="hero-content flex-col lg:flex-row">
          <img src={doctor} alt="doctor" className="-mt-32 hidden md:block lg:w-1/2 rounded-lg" />
          <div>
            <h3 className="font-bold text-primary">Appointment</h3>
            <h1 className="text-5xl font-bold text-white">Make an appointment</h1>
            <p className="py-6 text-white">
              It is a long established fact that a reader will be distracted by the readable content
              of a page when looking at its layout. The point of using Lorem Ipsumis that it has a
              more-or-less normal distribution of letters,as opposed to using 'Content here, content
              here', making it look like readable English. Many desktop publishing packages and web
              page
            </p>
            <PrimaryButton>Make Appointment</PrimaryButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MakeAppointment;
