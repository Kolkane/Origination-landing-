import { copy } from "@/config/copy";

export default function Footer() {
  return (
    <footer>
      <span>{copy.footer.gauche}</span>
      <span>{copy.footer.droite}</span>
    </footer>
  );
}
