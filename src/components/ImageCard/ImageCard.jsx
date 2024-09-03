import css from "./ImageCard.module.css";
export default function ImageCard({ alt, src, onClick }) {
  return (
    <div>
      <img src={src} alt={alt} onClick={onClick} className={css.cardImg} />
    </div>
  );
}
