import React from 'react';
import { Carousel } from 'react-bootstrap';
import tour from "../../Image/img/tour.jpg";
import events from "../../Image/img/events.jpg";
import singer from "../../Image/img/singer.jpg";
import { faCalendar, faClock, } from '@fortawesome/free-solid-svg-icons'
import "./Event.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const Events = () => {
    return (
        <div className="container mt-5 " >
            <h2 className="" id="Events">OUR EVENTS</h2>
            <div className="container bg-dark" style={{ borderRadius: '10px' }}>
                <Carousel className="my-carosel" varient="dark" fade={true} pause={false} controls={false} >
                    <Carousel.Item interval={4000}>
                        <div className="row">

                            <div className="col-md-6 mt-3 mb-3">
                                <img
                                    className="d-block w-100 event-img"
                                    src={singer}
                                    alt="First slide"
                                />
                            </div>
                            <div className="col-md-6 mt-3 mb-3 carosel-caption">
                                <div className="">
                                    <h3>Events Of Singer Alex</h3>
                                    <div className="row mt-3">
                                        <div className="col-md-6 mb-5">
                                            <p> <FontAwesomeIcon icon={faCalendar} /> January 10 2022 </p>
                                        </div>
                                        <div className="col-md-6">
                                            <p> <FontAwesomeIcon icon={faClock} /> 18:00PM - 22:00PM </p>
                                        </div>
                                    </div>
                                    <p>Open Mic Night Ullamcorper morbi tincidunt ornare massa egestas sed tempus urna et pharetra suspendisse interdum. Description Risus commodo viverra maecenas accumsan. Enim neque volutpat ac tincidunt vitae semper qu lectus. Est pellentesque elit ullamcorper dignissim. Auctor urna nunc id cursus metus aliquam eleifend mi.</p>
                                </div>
                            </div>
                        </div>

                    </Carousel.Item>
                    <Carousel.Item interval={4000}>
                        <div className="row">

                            <div className="col-md-6 mt-3 mb-3">
                                <img
                                    className="d-block w-100 event-img"
                                    src={events}
                                    alt="First slide"
                                />
                            </div>
                            <div className="col-md-6 mt-3 mb-3 carosel-caption">
                                <div className="">
                                    <h3>Proin Gravida Hendrerit</h3>
                                    <div className="row mt-3">
                                        <div className="col-md-6 mb-5">
                                            <p> <FontAwesomeIcon icon={faCalendar} /> January 10 2022 </p>
                                        </div>
                                        <div className="col-md-6">
                                            <p> <FontAwesomeIcon icon={faClock} /> 18:00PM - 22:00PM </p>
                                        </div>
                                    </div>
                                    <p>Open Mic Night Ullamcorper morbi tincidunt ornare massa egestas sed tempus urna et pharetra suspendisse interdum. Description Risus commodo viverra maecenas accumsan. Enim neque volutpat ac tincidunt vitae semper qu lectus. Est pellentesque elit ullamcorper dignissim. Auctor urna nunc id cursus metus aliquam eleifend mi.</p>
                                </div>
                            </div>
                        </div>

                    </Carousel.Item>
                    <Carousel.Item interval={4000}>
                        <div className="row">

                            <div className="col-md-6 mt-3 mb-3">
                                <img
                                    className="d-block w-100 event-img"
                                    src={tour}
                                    alt="First slide"
                                />
                            </div>
                            <div className="col-md-6 mt-3 mb-3 carosel-caption">
                                <div className="">
                                    <h3>World Tour Opper for Lucky Person</h3>
                                    <div className="row mt-3">
                                        <div className="col-md-6 mb-5">
                                            <p> <FontAwesomeIcon icon={faCalendar} /> January 10 2022 </p>
                                        </div>
                                        <div className="col-md-6">
                                            <p> <FontAwesomeIcon icon={faClock} /> 18:00PM - 22:00PM </p>
                                        </div>
                                    </div>
                                    <p>Open Mic Night Ullamcorper morbi tincidunt ornare massa egestas sed tempus urna et pharetra suspendisse interdum. Description Risus commodo viverra maecenas accumsan. Enim neque volutpat ac tincidunt vitae semper qu lectus. Est pellentesque elit ullamcorper dignissim. Auctor urna nunc id cursus metus aliquam eleifend mi.</p>
                                </div>
                            </div>
                        </div>
                    </Carousel.Item>
                </Carousel>
            </div>

        </div>
    );
};

export default Events;