import React from 'react'

import Fade from 'react-reveal/Fade';

import ImageHero from 'assets/images/img-hero.jpg'
import FrameImage from 'assets/images/img-hero-frame.jpg'
import IconCities from 'assets/images/icons/ic_cities.svg'
import IconTraveller from 'assets/images/icons/ic_traveler.svg'
import IconTreasure from 'assets/images/icons/ic_treasure.svg'

import Button from 'elements/Button'

import NumberFormat from 'utils/formatNumber'


export default function Hero(props) {

    function showMostPicked(){
        window.scrollTo({
            top: props.refMostPicked.current.offsetTop - 30,
            behavior: "smooth"
        })
    };

    return (
        <Fade bottom>
            <section className="container pt-4">
                <div className="row align-items-center">
                    <div className="col-auto pr-5" style={{ width:500 }}>
                        <h1 className="font-weight-bold line-height-1" style={{ marginBotton: 20 }}>
                            Forget Busy Work, <br />
                            Start Next Vacation
                        </h1>
                        <p className="font-weight-light text-gray-500 w-75" style={{ lineHeight: "170%", marginBottom: 30 }}>
                            We provide what you need to enjoy your 
                            holiday with family. Time to make another 
                            memorable moments.
                        </p>
                        <Button className="btn px-5" hasShadow isPrimary onClick={showMostPicked}>
                            Show Me Now
                        </Button>
                        <div className="row" style={{ marginTop: 80 }}>
                            <div className="col-auto col-sm">
                                <img 
                                height="36"
                                width="36" 
                                src={IconTraveller} 
                                alt={`${props.data.travelers} travelers` } 
                                />
                                <h6 className="mt-3">
                                    {NumberFormat(props.data.travelers)} <br /><span className="text-gray-500 font-weight-light">travellers</span>
                                </h6>
                            </div>
                            <div className="col-auto col-sm">
                                <img 
                                height="36"
                                width="36" 
                                src={IconTreasure} 
                                alt={`${props.data.treasures} treasures` } 
                                />
                                <h6 className="mt-3">
                                    {NumberFormat(props.data.treasures)} <br /><span className="text-gray-500 font-weight-light">treasure</span>
                                </h6>
                            </div>
                            <div className="col-auto col-sm">
                                <img 
                                height="36"
                                width="36" 
                                src={IconCities} 
                                alt={`${props.data.cities} cities` } 
                                />
                                <h6 className="mt-3">
                                    {NumberFormat(props.data.cities)} <br /><span className="text-gray-500 font-weight-light">cities</span>
                                </h6>
                            </div>
                        </div>
                    </div>
                    <div className="col-6 pl-5">
                        <div className="mt-5 d-none d-sm-block" style={{ width:520, height:410 }}>
                            <img src={ImageHero} alt="Room with couches" className="img-fluid position-absolute" style={{ margin: '-30px 0 0 -30px', zIndex: 1, width: 500}} />
                            <img src={FrameImage} alt="" className="img-fluid position-absolute" style={{ margin: '0 -15px -15px 0', width: 500 }} />
                        </div>
                    </div>
                </div>
                {/* <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">col-4</div>
                        <div className="col-lg-8 col-md-4 col-sm-12 col-xs-12">
                            <div className="row">
                                <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">col</div>
                                <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">col</div>
                            </div>
                            <div className="row">
                                <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">col</div>
                                <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">col</div>
                            </div>
                        </div>
                    </div>
                </div> */}
            </section>
        </Fade>
    )
}
