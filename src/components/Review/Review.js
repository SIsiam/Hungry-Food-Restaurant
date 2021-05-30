import React from 'react';

const Review = ({ review }) => {
    console.log(review);
    const { quote, name, from, img } = review;
    return (
        <div className="my-card col-md-4 col-sm-4 col-lg-6">
            <div className="card-footer d-flex  align-items-center">
                <img className="mx-3" src={img} alt="" width="60" />
                <div>
                    <h6 className="text-primary">{name}</h6>
                    <p className="m-0">{from}</p>
                </div>
            </div>
            <div class="card-body">
                <p class="card-text text-center">{quote}</p>
            </div>
        </div>
    );
};

export default Review;