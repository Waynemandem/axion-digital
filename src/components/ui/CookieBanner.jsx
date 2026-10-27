import { useEffect, useState } from "react";

const KEY = "axion-cookie-consent";

function loadTracking() {
  // Paste your Meta Pixel / analytics snippet here.
  // It only runs after the visitor accepts.
}

export default function CookieBanner() {
  const [choice, setChoice] = useState(() => localStorage.getItem(KEY));

  useEffect(() => {
    if (choice === "accepted") loadTracking();
  }, [choice]);

  if (choice) return null;

  const decide = (value) => {
    localStorage.setItem(KEY, value);
    setChoice(value);
  };

  return (
    <div className="cookie" role="dialog" aria-label="Cookie consent">
      <p>
        We use cookies for analytics and ad measurement only if you agree.{" "}
        <a href="/privacy">Privacy policy</a>
      </p>
      <div className="cookie-actions">
        <button className="btn btn-sm" onClick={() => decide("accepted")}>Accept</button>
        <button className="btn btn-sm btn-alt" onClick={() => decide("declined")}>Decline</button>
      </div>
    </div>
  );
}