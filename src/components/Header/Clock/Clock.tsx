import { useEffect, useState } from "react";

const Clock = () => {
  const timeZone = "Europe/Stockholm";

  const [time, setTime] = useState(new Date());
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  if (!mounted) {
    return (
      <span className="clock" style={{ marginLeft: "0.5ch" }}>
        (--:--)
      </span>
    );
  }

  return (
    <span className="clock" style={{ marginLeft: "0.5ch" }}>
      (
      <span className="hours">
        {time.toLocaleTimeString("en-GB", {
          hour: "2-digit",
          timeZone: timeZone,
        })}
      </span>
      <span
        className="colon"
        style={{ opacity: time.getSeconds() % 2 === 0 ? 1 : 0 }}
      >
        :
      </span>
      <span className="minutes">
        {time.toLocaleTimeString("en-GB", {
          minute: "2-digit",
          timeZone: timeZone,
        })}
      </span>
      )
    </span>
  );
};

export default Clock;
