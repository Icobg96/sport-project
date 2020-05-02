import React from 'react';
import Rating from '../components/product/Rating';

const imageUrl = "https://images.pexels.com/photos/3979650/pexels-photo-3979650.jpeg?auto=compress&amp;cs=tinysrgb&amp;h=750&amp;w=1260";

class ProductDetails extends React.Component {

    render() {
        return <div className="product-details">
            <div className="row">
                <div className="col-md-3 order-1 order-md-0">
                    <div className="d-flex flex-row flex-md-column h-100">
                        <div className="thumbnail-container">
                            <img className="thumbnail-image img-fluid" src="https://images.pexels.com/photos/3979650/pexels-photo-3979650.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"/>
                        </div>
                        <div className="thumbnail-container">
                            <img className="thumbnail-image img-fluid" src="https://images.pexels.com/photos/3979650/pexels-photo-3979650.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"/>
                        </div>
                        <div className="thumbnail-container">
                            <img className="thumbnail-image img-fluid" src="https://images.pexels.com/photos/3979650/pexels-photo-3979650.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"/>
                        </div>
                    </div>
                </div>
                <div className="col order-0 order-md-1">
                    <div className="featured-image-container"
                         style={{ backgroundImage: `url(${imageUrl})` }}
                    ></div>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <div className="d-flex justify-content-between flex-column flex-md-row align-items-left align-items-md-center product-title-container">
                        <div className="product-title">
                            Product title displayed here
                        </div>
                        <div className="product-info">
                            Product info
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <div className="d-flex align-items-center justify-content-between justify-content-md-start">
                        <div className="product-subtitle">
                            Some additional info
                        </div>
                        <Rating rating={4.5}/>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <div className="d-flex tags-container">
                        <span className="tag-label">Secondary</span>
                        <span className="tag-label">Success</span>
                        <span className="tag-label">Danger</span>
                        <span className="tag-label">Warning</span>
                    </div>
                </div>
            </div>

            {/* TODO split into components */}
            <div className="row">
                <div className="col">
                    <div className="d-flex product-specs-container">
                        <div className="d-flex product-spec">
                            <div className="product-spec-icon-container d-flex align-items-center justify-content-center">
                                <i className="fa fa-address-card"></i>
                            </div>
                            <div className="d-flex flex-column justify-content-center">
                                <div className="product-spec-label">Duration</div>
                                <div className="product-spec-value">4 Days</div>
                            </div>
                        </div>
                        <div className="d-flex product-spec">
                            <div className="product-spec-icon-container d-flex align-items-center justify-content-center">
                                <i className="fas fa-air-freshener"></i>
                            </div>
                            <div className="d-flex flex-column justify-content-center">
                                <div className="product-spec-label">Activity level</div>
                                <div className="product-spec-value">4 Days</div>
                            </div>
                        </div>
                        <div className="d-flex product-spec">
                            <div className="product-spec-icon-container d-flex align-items-center justify-content-center">
                                <i className="fas fa-air-freshener"></i>
                            </div>
                            <div className="d-flex flex-column justify-content-center">
                                <div className="product-spec-label">Hosted in</div>
                                <div className="product-spec-value">4 Days</div>
                            </div>
                        </div>
                        <div className="d-flex product-spec">
                            <div className="product-spec-icon-container d-flex align-items-center justify-content-center">
                                <i className="fas fa-air-freshener"></i>
                            </div>
                            <div className="d-flex flex-column justify-content-center">
                                <div className="product-spec-label">Includes</div>
                                <div className="product-spec-value">4 Days</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <div className="description-container">
                        <h3 className="description-label">Description</h3>
                        <p className="description-content">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut pretium sem, vitae sollicitudin quam. In hac habitasse platea dictumst. Nam et finibus odio, eget tincidunt urna. In molestie dui lectus, dapibus vehicula massa ultrices et. Duis in ipsum vel nulla consectetur aliquam at eget erat. Vivamus euismod nunc lectus, lacinia hendrerit sapien porta ut. Pellentesque id quam elit.
                        </p>
                        <button type="button" className="btn btn-primary card-button">Action</button>
                    </div>
                </div>
            </div>

        </div>
    }
}

export default ProductDetails;