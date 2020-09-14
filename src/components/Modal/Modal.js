import React from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';

const modalRoot = document.querySelector('#modal-root');

export default class Modal extends React.Component {
    componentDidMount() {
        window.addEventListener('keydown', this.onEscPress);
    }

    componentWillUnmount() {
        window.removeEventListener('keydown', this.onEscPress);
    }

    onEscPress = event => {
        if (event.code === 'Escape') {
            this.props.closeModal();
        }
    };

    onCloseModal = event => {
        if (event.target === event.currentTarget) {
            this.props.closeModal();
        }
    };

    render() {
        return createPortal(
            <div className="Overlay" onClick={this.onCloseModal}>
                <div className="Modal">
                    <img src={this.props.largeImageURL} alt="" />
                </div>
            </div>,
            modalRoot,
        );
    }
}

Modal.propTypes = {
    largeImageURL: PropTypes.string.isRequired,
    closeModal: PropTypes.func.isRequired,
};
