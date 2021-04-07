import { Component } from 'react';
import styles from '../Modals/Modal.module.css';
import { createPortal } from 'react-dom';

const modalRoot = document.querySelector('#modal-root');
class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyClose);
  }
  handleKeyClose = e => {
    if (e.code === 'Escape') {
      this.props.onClose();
    }
  };
  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyClose);
  }
  backdropClick = e => {
    if (e.currentTarget === e.target) {
      this.props.onClose();
    }
  };
  render() {
    return createPortal(
      <div className={styles.backdrops} onClick={this.backdropClick}>
        <div className={styles.modal}> {this.props.children}</div>
      </div>,
      modalRoot,
    );
  }
}

export default Modal;
