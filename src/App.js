import { Component } from 'react';
import Modal from './Components/Modals';
import axios from 'axios';
import ImageGallery from './Components/ImageGallery';
import ImageGalleryItem from './Components/ImageGalleryItem';
import Button from './Components/Button';

import SearchBar from './Components/SearchBar';
import styles from './Components/Modals/Modal.module.css';

class App extends Component {
  state = {
    showModal: false,
    images: [],
    currentPage: 1,
    searchImage: '',
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchImage !== this.state.searchImage) {
      this.fetchImage();
    }
  }

  addImage = image => {
    // this.setState({ isLoading: true });
    this.setState({ searchImage: image, images: [], currentPage: 1 });
  };
  fetchImage = async () => {
    const { searchImage, currentPage } = this.state;
    try {
      axios
        .get(
          `https://pixabay.com/api/?q=${searchImage}&page=${currentPage}&key=20342526-89d38198e8299a53d4950dffe&image_type=photo&orientation=horizontal&per_page=12`,
        )
        .then(response =>
          this.setState(prevState => ({
            images:[prevState.images,...response.data.hits] ,
            currentPage: prevState.currentPage + 1,
          })),
        );
    } catch (e) {
      console.log(`Axios request failed: ${e}`);
    }
  };
  toogleModal = () => {
    this.setState(({ showModal }) => ({ showModal: !showModal }));
  };

  render() {
    const { showModal, images } = this.state;

    return (
      <div>
        {' '}
        <SearchBar onSubmit={this.addImage} />
        <ImageGallery images={images} />
        <button
          className={styles.button}
          type="button"
          onClick={this.fetchImage}
        >
          {' '}
          LoadMore
        </button>
        {/* <Button onClick={this.fetchImage}/>  */}
        {showModal && (
          <Modal Close={this.toogleModal}>
            {' '}
            <ImageGalleryItem src={images} onClick={this.toogleModal} />
          </Modal>
        )}
      </div>
    );
  }
}

export default App;
