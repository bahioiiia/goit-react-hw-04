import Modal from "react-modal";
import css from "./ImageModal.module.css";

Modal.setAppElement("#root");

export default function ImageModal({ isOpen, onRequestClose, imageData }) {
  if (!imageData) return null;

  const {
    regular,
    alt_description,
    description,
    likes,
    instagram_username,
    name,
  } = imageData;

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className={css.modal}
      overlayClassName={css.overlay}
    >
      <div className={css.content}>
        <img src={regular} alt={alt_description} className={css.image} />
        <div className={css.details}>
          <p>
            <strong>Author:</strong> {name}
          </p>
          {instagram_username && (
            <p>
              <strong>Instagram:</strong> @{instagram_username}
            </p>
          )}
          {description && (
            <p>
              <strong>Description:</strong> {description}
            </p>
          )}
          <p>
            <strong>Likes:</strong> {likes}
          </p>
        </div>
      </div>
    </Modal>
  );
}
