
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Brand from "./Brand";

const navigation = [
  ["Our approach", "#experience"],
  ["Services", "#services"],
  ["How it works", "#process"],
  ["FAQs", "#faq"],
];

export default function Header() {
  const [open, setOpen] = useState(false);

  function closeMenu() {
    setOpen(false);
  }

  return (
    <header>
      <div className="wrap nav">
        <Brand />

        <button
          className="toggle"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close navigation" : "Open navigation"}
          aria-expanded={open}
          aria-controls="main-navigation"
        >
          {open ? <X /> : <Menu />}
        </button>

        <nav
          id="main-navigation"
          className={open ? "links open" : "links"}
        >
          {navigation.map(([title, href]) => (
            <a
              href={href}
              key={href}
              onClick={closeMenu}
            >
              {title}
            </a>
          ))}

          <a
            className="btn gold"
            href="#booking"
            onClick={closeMenu}
          >
            Enquire now ↗
          </a>
        </nav>
      </div>
    </header>
  );
}
