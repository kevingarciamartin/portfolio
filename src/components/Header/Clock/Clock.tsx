import { useEffect, useState, useSyncExternalStore } from "react";

const emptySubscribe = () => () => {};

const Clock = () => {
  const timeZone = "Europe/Stockholm";

  const isClient = useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );

  const [time, setTime] = useState(new Date());

  useEffect(() => {
    if (!isClient) return;
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, [isClient]);

  if (!isClient) {
    return (
      <span className="clock" style={{ marginLeft: "0.5ch" }}>
        (--:--)
      </span>
    );
  }

  const formatter = new Intl.DateTimeFormat("en-GB", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
    timeZone: timeZone,
  });

  const parts = formatter.formatToParts(time);
  const hours = parts.find((p) => p.type === "hour")?.value || "";
  const minutes = parts.find((p) => p.type === "minute")?.value || "";

  return (
    <span className="clock" style={{ marginLeft: "0.5ch" }}>
      (
      <span className="hours">{hours}</span>
      <span
        className="colon"
        style={{ opacity: time.getSeconds() % 2 === 0 ? 1 : 0 }}
      >
        :
      </span>
      <span className="minutes">{minutes}</span>
      )
    </span>
  );
};

export default Clock;
