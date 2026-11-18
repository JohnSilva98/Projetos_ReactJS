import { useState, useEffect } from "react";

const useCountdown = (date) => {
  const [day, setDay] = useState(0);
  const [hour, setHour] = useState(0);
  const [minute, setMinute] = useState(0);
  const [second, setSecond] = useState(0);

  useEffect(() => {
    if (!date) return;

    const countdown = () => {
      // Converte a data para meia-noite no horário local
      const [year, month, dateDay] = date.split("-").map(Number);

      const countDate = new Date(year, month - 1, dateDay).getTime();
      const now = new Date().getTime();

      let interval = Math.max(0, countDate - now);

      const second = 1000;
      const minute = second * 60;
      const hour = minute * 60;
      const day = hour * 24;

      const dayNumber = Math.floor(interval / day);
      const hourNumber = Math.floor((interval % day) / hour);
      const minuteNumber = Math.floor((interval % hour) / minute);
      const secondNumber = Math.floor((interval % minute) / second);

      setDay(dayNumber);
      setHour(hourNumber);
      setMinute(minuteNumber);
      setSecond(secondNumber);
    };

    // Executa imediatamente
    countdown();

    // Atualiza a cada segundo
    const timer = setInterval(countdown, 1000);

    // Limpa o intervalo
    return () => clearInterval(timer);
  }, [date]);

  return [day, hour, minute, second];
};

export default useCountdown;