import { Component } from 'react';
import Modal from './Components/Modals';
// import Loader from "react-loader-spinner";
import LinearProgress from '@material-ui/core/LinearProgress';
import { Notification } from 'react-pnotify';
import ImageGallery from './Components/ImageGallery';
import Button from './Components/Button';
import imageApi from './Components/Api/ImageA-Api';
import SearchBar from './Components/SearchBar';
// import styles from './Components/Modals/Modal.module.css';

class App extends Component {
  state = {
    showModal: false,
    images: [],
    currentPage: 1,
    searchImage: '',
    isLoading: false,
    error: null,
    modalURL: '',
    scrollScr: false,
    enterError: false,
  };

  componentDidUpdate(prevProps, prevState) {
    console.log('componentDidUpdate');

    if (prevState.searchImage !== this.state.searchImage) {
      this.fetchImage();
    }
  }

  addImage = image => {
    this.setState({ searchImage: image, images: [], currentPage: 1 });
  };

  fetchImage = () => {
    const { searchImage, currentPage } = this.state;
    const options = { searchImage, currentPage };
    this.setState({ isLoading: true });
    this.setState({ scrollScr: true });
    if (searchImage.length <= 2) {
      return;
    }
    this.setState({ enterError: true });
    // try {
    imageApi
      .fetchImages(options)
      .then(hits =>
        this.setState(prevState => ({
          images: [...prevState.images, ...hits],
          currentPage: prevState.currentPage + 1,
        })),
      )
      .catch(error => this.setState({ error }))
      .finally(() => this.setState({ isLoading: false }));
  };

  toogleModal = () => {
    this.setState(({ showModal }) => ({ showModal: !showModal }));
  };
  getModalImage = largeImageURL => {
    console.log('largeImageURL', largeImageURL);
    this.setState({ modalURL: largeImageURL.modalSrc });
    console.log('modalURL', this.state.modalURL);
    this.toogleModal();
  };

  render() {
    const {
      showModal,
      images,
      isLoading,
      // enterError,
      modalURL,
      scrollScr,
      error,
    } = this.state;

    return (
      <div>
        {' '}
        <SearchBar onSubmit={this.addImage} />
        <ImageGallery images={images} onClick={this.getModalImage} />
        {error && (
          <Notification
            type="error"
            title="Error"
            text="Please write some querly"
            animateIn="bounceInLeft"
            animateOut="bounceOutRight"
            delay={2500}
            shadow={true}
            hide={true}
            nonblock={false}
            desktop={false}
          />
        )}
        {isLoading && (
          <LinearProgress color="secondary" />
          //   <Loader className ={styles.loader}
          //   type="Oval"
          //   color="#03061d"
          //   height={60}
          //   width={60}
          //   timeout={3000}
          // />
        )}
        {images.length > 0 && <Button onClick={this.fetchImage} />}
        {images.length > 0 &&
          scrollScr &&
          window.scrollTo({
            top:
              document.documentElement.scrollTop +
              document.documentElement.clientHeight,
            behavior: 'smooth',
          })}
        {showModal && (
          <Modal onClick={this.toogleModal} onClose={this.toogleModal}>
            <img width="1200" height="900" src={modalURL} alt="something" />
          </Modal>
        )}
      </div>
    );
  }
}

export default App;
