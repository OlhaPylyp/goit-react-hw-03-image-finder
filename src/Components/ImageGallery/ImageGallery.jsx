import style from '../ImageGallery/ImageGallery.module.css';
import ImageGalleryItem from '../ImageGalleryItem';

const ImageGallery = ({ images, onClick  }) => (
<div className ={style.grid}>
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
  </ul></div>
);
export default ImageGallery;
