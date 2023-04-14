import { useState, useEffect } from "react";

const Timer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const calculateTimeLeft = () => {
    const today = new Date();
    const deadline = new Date(today.getFullYear(), today.getMonth() + 1, 0);
    const difference = deadline.getTime() - today.getTime();
    console.log(difference);
    const timeLeft = {};

    if (difference > 0) {
      timeLeft.days = Math.floor(difference / (1000 * 60 * 60 * 24));
      timeLeft.hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
      timeLeft.minutes = Math.floor((difference / 1000 / 60) % 60);
      timeLeft.seconds = Math.floor((difference / 1000) % 60);
    } else {
      timeLeft.days = 0;
      timeLeft.hours = 0;
      timeLeft.minutes = 0;
      timeLeft.seconds = 0;
    }
    return timeLeft;
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const timeLeft = calculateTimeLeft();
      setTimeLeft(timeLeft);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const formatTime = (time) => {
    return time < 10 ? `0${time}` : time;
  };

  return (
    <div className="flex justify-center gap-2 sm:gap-5 text-primary">
      <div className="flex flex-col justify-center items-center w-20 h-20 sm:w-24 sm:h-24 rounded-full shadow-lg shadow-primary">
        <div className="text-lg sm:text-2xl font-bold">
          {formatTime(timeLeft.days)}
        </div>
        <div className="font-bold text-sm sm:text-base">Giorni</div>
      </div>
      <div className="flex flex-col justify-center items-center w-20 h-20 sm:w-24 sm:h-24 rounded-full shadow-lg shadow-primary">
        <div className="text-lg sm:text-2xl font-bold">
          {formatTime(timeLeft.hours)}
        </div>
        <div className="font-bold text-sm sm:text-base">Ore</div>
      </div>
      <div className="flex flex-col justify-center items-center w-20 h-20 sm:w-24 sm:h-24 rounded-full shadow-lg shadow-primary">
        <div className="text-lg sm:text-2xl font-bold">
          {formatTime(timeLeft.minutes)}
        </div>
        <div className="font-bold text-sm sm:text-base">Minuti</div>
      </div>
      <div className="flex flex-col justify-center items-center w-20 h-20 sm:w-24 sm:h-24 rounded-full shadow-lg shadow-primary text-yellow-600">
        <div className="text-lg sm:text-2xl font-bold ">
          {formatTime(timeLeft.seconds)}
        </div>
        <div className="font-bold text-sm sm:text-base">Secondi</div>
      </div>
    </div>
  );
};

export default Timer;
