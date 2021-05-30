import React from 'react';
import ReviewsData from '../../Data/ReviewsData';
import Review from '../Review/Review';
import './Reviews.css';

const Reviews = () => {
    return (
        <section className="reviews my-5 py-5">
            <div className="container">
                <div className="section-header">
                    <h2 className="text-primary">REVIEWS </h2>
                </div>

                <div className="container row">
                    {
                        ReviewsData.map(review => <Review review={review} />)
                    }
                </div>
            </div>
        </section>
    );
};

export default Reviews;