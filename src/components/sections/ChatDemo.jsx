import { useEffect, useState } from "react";
import { chatDemo } from "../../data";

export default function ChatDemo() {
  const [shown, setShown] = useState(0);
  const [run, setRun] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setShown(chatDemo.length);
      return;
    }
    setShown(0);
    const timers = chatDemo.map((_, i) =>
      setTimeout(() => setShown(i + 1), 900 * (i + 1))
    );
    return () => timers.forEach(clearTimeout);
  }, [run]);

  return (
    <div className="chat">
      <div className="chat-head">WhatsApp · example conversation</div>
      <div className="chat-body">
        {chatDemo.slice(0, shown).map((m, i) => (
          <p key={i} className={`bubble ${m.from}`}>{m.text}</p>
        ))}
      </div>
      <button className="chat-replay" onClick={() => setRun((r) => r + 1)}>Replay</button>
    </div>
  );
}