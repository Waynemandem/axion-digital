import { useEffect, useState } from "react";
import { chatDemo } from "../../data";

const TICK = 1100; // ms between messages
const HOLD = 2; // extra ticks to pause on the finished chat

export default function ChatDemo() {
  const [shown, setShown] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setShown(chatDemo.length);
      return;
    }
    let step = 0;
    const timer = setInterval(() => {
      step = step > chatDemo.length + HOLD ? 0 : step + 1;
      setShown(Math.min(step, chatDemo.length));
    }, TICK);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="chat">
      <div className="chat-head">WhatsApp · example conversation</div>
      <div className="chat-body">
        {chatDemo.slice(0, shown).map((m, i) => (
          <p key={i} className={`bubble ${m.from}`}>{m.text}</p>
        ))}
      </div>
    </div>
  );
}