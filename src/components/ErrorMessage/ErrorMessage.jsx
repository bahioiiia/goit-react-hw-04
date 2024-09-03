import css from "./ErrorMessage.module.css";

export default function ErrorMessage() {
  return (
    <p className={css.errorText}>
      Something's wrong! Please relosd page!
    </p>
  );
}
