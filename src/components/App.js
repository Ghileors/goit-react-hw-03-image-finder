import React, { Component } from 'react';

import Searchbar from './Searchbar';
import ImageGallery from './ImageGallery';
import Button from './Button';
import Loader from './Loader';
import Error from './Error';
import Modal from './Modal';

import imagesApi from '../api/images-api';

export default class App extends Component {
    state = {
        images: [],
        searchQuery: '',
        currentPage: 1,
        isLoading: false,
        showModal: false,
        originalImageURL: null,
        error: null,
    };

    componentDidUpdate(prevProps, prevState) {
        if (prevState.searchQuery !== this.state.searchQuery) {
            this.fetchImg();
        }

        if (
            this.state.currentPage > 2 &&
            prevState.currentPage !== this.state.currentPage
        ) {
            this.smoothScrol();
        }
    }

    onChangeQuery = query => {
        this.setState({
            searchQuery: query,
            currentPage: 1,
            images: [],
            error: null,
            showModal: false,
        });
    };

    fetchImg = () => {
        const { currentPage, searchQuery } = this.state;
        const options = { searchQuery, currentPage };

        this.setState({ isLoading: true });

        imagesApi
            .fetchImages(options)
            .then(hits => {
                this.setState(prevState => ({
                    images: [...prevState.images, ...hits],
                    currentPage: prevState.currentPage + 1,
                }));
            })
            .catch(error => this.setState({ error }))
            .finally(() => this.setState({ isLoading: false }));
    };

    handleClickImage = largeImageURL => {
        this.openModal(largeImageURL);
    };

    openModal = largeImageURL =>
        this.setState({ showModal: true, originalImageURL: largeImageURL });

    closeModal = () =>
        this.setState({ showModal: false, originalImageURL: '' });

    smoothScrol() {
        window.scrollTo({
            top: document.documentElement.scrollHeight,
            behavior: 'smooth',
        });
    }

    render() {
        const {
            images,
            isLoading,
            error,
            showModal,
            originalImageURL,
        } = this.state;

        const buttonIsShown = images.length > 0 && !isLoading;

        return (
            <>
                {error && <Error />}

                <Searchbar onSubmit={this.onChangeQuery} />

                <ImageGallery
                    images={images}
                    onImageClick={this.handleClickImage}
                />

                {showModal && (
                    <Modal
                        largeImageURL={originalImageURL}
                        closeModal={this.closeModal}
                    ></Modal>
                )}

                {isLoading && <Loader />}

                {buttonIsShown && <Button onLoadMore={this.fetchImg} />}
            </>
        );
    }
}
