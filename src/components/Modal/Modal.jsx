import { Component } from 'react';
import { ModalStyle, Overlay } from './Modal.styled';

class Modal extends Component {
  render() {
    return (
      <Overlay onClick={this.props.toggleModal}>
        <ModalStyle>
          <img src={this.props.src} alt="" width="500" />
        </ModalStyle>
      </Overlay>
    );
  }
}

export default Modal;
