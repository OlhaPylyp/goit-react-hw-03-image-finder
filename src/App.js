import { Component } from 'react';
import Modal from './Components/Modals';
import SearchBar from './Components/SearchBar'
import styles from './Components/Modals/Modal.module.css'

class App extends Component {
  state = {
    showModal: true,
  };

  toogleModal = () => {
    this.setState(({ showModal }) => ({ showModal: !showModal }));
  };

  render() {
    const { showModal } = this.state;
  

    return (
      <div>
      
          <button  className={styles.button} type="button" onClick={this.toogleModal}>
      {' '}
      Open
    </button>
        {showModal && (
          <Modal onClose={this.toogleModal}> 
            <SearchBar/>
            <p>Lorem jkhkjfdkjjkjfkjgkgfda</p>
            <button  className={styles.button} type="button" onClick={this.toogleModal}>
              {' '}
              Close
            </button>
          </Modal>
        )}
      </div>
    );
  }
}

export default App;
