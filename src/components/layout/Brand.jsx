
import { ChefHat } from "lucide-react";

export default function Brand() {
  return (
    <a
      className="brand"
      href="#home"
      aria-label="Estelle's Kitchen home"
    >
      <span className="mark">
        <ChefHat size={24} />
        <i>E</i>
      </span>

      <span>
        <b>ESTELLE'S</b>
        <small>K I T C H E N</small>
      </span>
    </a>
  );
}
