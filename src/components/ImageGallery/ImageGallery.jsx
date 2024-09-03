import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";

export default function ImageGallery({ items, onImageClick, lastPictureRef }) {
  return (
    <ul className={css.container}>
      {items.map(
        (
          {
            id,
            urls: { regular, small },
            alt_description,
            description,
            likes,
            user: { instagram_username, name },
          },
          i
        ) => {
          const isLast = i === items.length - 1;
          return (
            <li
              key={id}
              className={css.wrap}
              ref={isLast ? lastPictureRef : null}
            >
              <ImageCard
                src={small}
                alt={alt_description}
                onClick={() =>
                  onImageClick({
                    regular,
                    alt_description,
                    description,
                    likes,
                    instagram_username,
                    name,
                  })
                }
              />
            </li>
          );
        }
      )}
    </ul>
  );
}
