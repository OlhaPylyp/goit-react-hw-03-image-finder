import style from '../ImageGalleryItem/ImageGalleryItem.module.css';

const ImageGalleryItem = ({ id, webformatURL, modalSrc, onClick }) => (
  <li key={id} className={style.imageGalleryItem}>
    <img
      src={webformatURL}
      alt="querly img"
      className={style.imageGalleryItem_image}
      onClick={() => onClick( {modalSrc})}
    />
  </li>
);

export default ImageGalleryItem;
