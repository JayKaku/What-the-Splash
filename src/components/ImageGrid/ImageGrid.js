import React, { Component } from 'react';
import {connect} from 'react-redux'

import {loadImages} from '../../actions/index'

import './styles.css';
import Button from '../Button'

import Stats from '../Stats'

class ImageGrid extends Component {
    state = {
        images: [],
    };


    componentDidMount() {
        this.props.loadImages();
    }

    render() {
        const { images, isLoading, error, loadImages, imageStats } = this.props;
        //console.log(images)
        return (
            <div className="content">
                <section className="grid">
                    {images.map(image => (
                        <div
                            key={image.id}
                            className={`item item-${Math.ceil(
                                image.height / image.width,
                            )}`}
                        >
                            <Stats stats={imageStats[image.id]}/>
                            <img
                                src={image.urls.small}
                                alt={image.user.username}
                            />
                        </div>
                    ))}
                    
                </section>
                {error && <div className="error">{JSON.stringify(error)}</div>}
                <Button
                        onClick={() => !isLoading && loadImages()}
                        loading={isLoading}
                    >
                    Load More
                    </Button>
            </div>
        );
    }
}

const mapStateToProps = (state)=>{
    //console.log(state)
    let {isLoading, error, images, imageStats } = state
    return{
        isLoading,
        error,
        images,
        imageStats
    }
};

const mapDispatchToProps = (dispatch) =>({
    loadImages : () => dispatch(loadImages()),
})

export default connect(mapStateToProps,mapDispatchToProps)(ImageGrid);
