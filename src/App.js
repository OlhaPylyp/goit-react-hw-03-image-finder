import { Component } from 'react';
import Modal from './Components/Modals';
// import Loader from "react-loader-spinner";
import LinearProgress from "@material-ui/core/LinearProgress";

import ImageGallery from './Components/ImageGallery';
import ImageGalleryItem from './Components/ImageGalleryItem';
import Button from './Components/Button';
import imageApi from './Components/Api/ImageA-Api';

import SearchBar from './Components/SearchBar';
import styles from './Components/Modals/Modal.module.css';

class App extends Component {
  state = {
    showModal: false,
    images: [],
    currentPage: 1,
    searchImage: '',
    isLoading:false,
  };

  componentDidUpdate(prevProps, prevState) {
  
    if (prevState.searchImage !== this.state.searchImage) {
      this.fetchImage();      
    }
    }

  addImage = image => {
  
    this.setState({ searchImage: image, images: [], currentPage: 1 });
  };
  fetchImage =  () => {
    const { searchImage, currentPage } = this.state;
    const options = { searchImage, currentPage };
      this.setState({ isLoading: true });
    // try {
      imageApi.fetchImages(options).then(hits =>
        this.setState(prevState => ({
          images: [...prevState.images, ...hits],
          currentPage: prevState.currentPage + 1,
        })),
      ).finally (()=>this.setState({ isLoading:false })) ;
    // } catch (e) {
    //   console.log(`Axios request failed: ${e}`);
    // }
  //   
   };
  toogleModal = () => {
    this.setState(({ showModal }) => ({ showModal: !showModal }));
  };

  render() {
    const { showModal, images, isLoading} = this.state;

    return (
      <div>
        {' '}
        <SearchBar onSubmit={this.addImage} />
       
        <ImageGallery images={images} />
        {isLoading&& (<LinearProgress color='secondary' />
      //   <Loader className ={styles.loader}
      //   type="Oval"
      //   color="#03061d"
      //   height={60}
      //   width={60}
      //   timeout={3000} 
      // />
      )}
        {images.length > 0 && (
          <button
            className={styles.button}
            type="button"
            onClick={this.fetchImage}
          >
            {' '}
            LoadMore
          </button>
        )}
      
        {/* <Button onClick={this.fetchImage}/>  */}
        {showModal && (
          <Modal Close={this.toogleModal}>
            {' '}
            <ImageGallery src={images} onClick={this.toogleModal} />
          </Modal>
        )}
      </div>
    );
  }
}

export default App;
