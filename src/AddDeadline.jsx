import { useState } from "react";

const AddDeadline = () => {
  const today = new Date();
  console.log(today);
  const [date, setDate] = useState();
  const [time, setTime] = useState();

  return (
    <div className="text-black" >
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
      <input
        type="time"
        value={time}
        onChange={(e) => setTime(e.target.value)}
      />
    </div>
  );
};

export default AddDeadline;
