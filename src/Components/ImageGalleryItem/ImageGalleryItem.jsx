import style from '../ImageGalleryItem/ImageGalleryItem.module.css';

const ImageGalleryItem = ({ id, webformatURL, largeImageURL }) => (
  <li key={id} className={style.imageGalleryItem}>
    <img
      src={webformatURL}
      alt="hjkhkj"
      className={style.imageGalleryItem_image}
    />
     </li>
);
export default ImageGalleryItem;
