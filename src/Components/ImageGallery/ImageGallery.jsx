import style from '../ImageGallery/ImageGallery.module.css';
import ImageGalleryItem from '../ImageGalleryItem';

const ImageGallery = ({ images, onClick  }) => (
  <ul className={style.imageGallery}>
    {images.map(({ id, webformatURL, largeImageURL}) => {
      return (
        <ImageGalleryItem
          id={id}
          webformatURL={webformatURL}
          modalSrc={largeImageURL}
          onClick={onClick}
        />
      );
    })}
  </ul>
);
export default ImageGallery;
