import style from '../ImageGallery/ImageGallery.module.css';
import ImageGalleryItem from '../ImageGalleryItem';

const ImageGallery = ({ images }) => (
  <ul className={style.imageGallery}>
    {images.map(({ id, webformatURL, largeImageURL }) => {
      return (
        <ImageGalleryItem
          id={id}
          webformatURL={webformatURL}
          largeImageURL={largeImageURL}
        />
      );
    })}
  </ul>
);
export default ImageGallery;
