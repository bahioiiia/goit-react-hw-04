import { useState, useRef, useEffect } from "react";
import SearchBar from "../SearchBar/SearchBar";
/* import ImageGallery from "../ImageGallery/ImageGallery";
import Loader from "../Loader/Loader";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import ImageModal from "../ImageModal/ImageModal";
import { fetchPicturesWithQuery } from "../../unsplash-api";
import { IoArrowUpCircleSharp } from "react-icons/io5"; */
import css from "./App.module.css";

export default function App() {
  const [pictures, setPictures] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState("");
  const [totalPages, setTotalPages] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const lastPictureRef = useRef(null);
  const searchBarRef = useRef(null);

  useEffect(() => {
    if (!loading && lastPictureRef.current) {
      lastPictureRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [pictures, loading]);

  const handleSearch = async (newQuery) => {
    try {
      setPictures([]);
      setError(false);
      setLoading(true);
      setQuery(newQuery);
      setPage(1);
      const data = await fetchPicturesWithQuery(newQuery, 1);
      setPictures(data.results);
      setTotalPages(data.total_pages);
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  const loadMorePictures = async () => {
    try {
      setLoading(true);
      const nextPage = page + 1;
      const data = await fetchPicturesWithQuery(query, nextPage);
      setPictures((prevPictures) => [...prevPictures, ...data.results]);
      setPage(nextPage);
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  const openModal = (imageData) => {
    setSelectedImage(imageData);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };

  const scrollToTop = () => {
    if (searchBarRef.current) {
      searchBarRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const shouldShowLoadMore =
    pictures.length > 0 && page < totalPages && !loading;

  return (
    <div className={css.container}>
      <SearchBar onSearch={handleSearch} ref={searchBarRef} />
      {/* {pictures.length > 0 && (
        <ImageGallery
          items={pictures}
          onImageClick={openModal}
          lastPictureRef={lastPictureRef}
        />
      )}
      {shouldShowLoadMore && <LoadMoreBtn onClick={loadMorePictures} />}
      {loading && <Loader />}
      {error && <ErrorMessage />}
      <button onClick={scrollToTop} className={css.scrollBtn}>
        <IoArrowUpCircleSharp className={css.reactIcons} />
      </button>
      <ImageModal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        imageData={selectedImage}
      /> */}
    </div>
  );
}
