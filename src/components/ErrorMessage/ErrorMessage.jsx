import css from "./ErrorMessage.module.css";

export default function ErrorMessage() {
  return (
    <p className={css.errorText}>
      Whoops, something went wrong! Please try to clarify the request!
    </p>
  );
}
