import { useQuery } from "@tanstack/react-query";
import { format } from "date-fns";
import React, { useEffect, useState } from "react";
import Loading from "../../Shared/Loading/Loading";
import BookingModal from "../BookingModal/BookingModal";
import AppointmentOption from "./AppointmentOption";

const AvailableAppointments = ({ selectedDate }) => {
  // const [appointmentOptions, setAppointmentOptions] = useState([]);
  const [treatment, setTreatment] = useState(null);
  const date = format(selectedDate, "PP");

  const {
    data: appointmentOptions = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["appointmentOptions", date],
    queryFn: () =>
      fetch(`http://localhost:5000/appointmentOptions?date=${date}`).then((res) => res.json()),
  });

  if (isLoading) {
    return <Loading></Loading>;
  }

  /*   const {data:appointmentOptions=[]}=useQuery({
    queryKey:['appointmentoptions'],
    queryFn:async()=>{
      const res=await fetch("http://localhost:5000/appointmentOptions");
      const data=await res.json();
      return data;
    }
  }) */

  /* useEffect(() => {
    fetch("http://localhost:5000/appointmentoptions")
      .then((res) => res.json())
      .then((data) => setAppointmentOptions(data));
  }, []); */
  return (
    <section className="mt-16">
      <p className="text-center text-secondary">
        Available appointments on {format(selectedDate, "PP")}
      </p>
      <div className="grid gap-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {appointmentOptions.map((option) => (
          <AppointmentOption
            key={option._id}
            option={option}
            setTreatment={setTreatment}
          ></AppointmentOption>
        ))}
      </div>
      {treatment && (
        <BookingModal
          selectedDate={selectedDate}
          treatment={treatment}
          setTreatment={setTreatment}
          refetch={refetch}
        ></BookingModal>
      )}
    </section>
  );
};

export default AvailableAppointments;
