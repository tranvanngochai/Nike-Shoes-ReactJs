import React, { Component } from 'react'
import '../css/Cart.css'
import '../css/Home.css'
import IMAGES from '../../images'
import { Link } from 'react-router-dom'

export class Home extends Component {
    render() {
        return (
            <>
                <section className="section hero" style={{ backgroundImage: `url(${IMAGES.hero_banner})` }}>
                    <div className="container">
                        <h2 className="h1 hero-title">
                            New Summer <strong>Shoes Collection</strong>
                        </h2>
                        <p className="hero-text">
                            Competently expedite alternative benefits whereas leading-edge catalysts for change. Globally leverage
                            existing an
                            expanded array of leadership.
                        </p>
                        <Link to="/product" className="btn btn-primary" style={{ display: 'inline-flex' }}>
                            <span>Show now</span>
                            <ion-icon name="arrow-forward-outline" aria-hidden="true" />
                        </Link>
                    </div>
                </section>


                <section className="section collection">
                    <div className="container">
                        <ul className="collection-list has-scrollbar">
                            <li>
                                <div className="collection-card" style={{ backgroundImage: `url(${IMAGES.collection1})` }}>
                                    <h3 className="h4 card-title">Men Collections</h3>
                                    <Link to="/product" className="btn btn-secondary">
                                        <span>Explore All</span>
                                        <ion-icon name="arrow-forward-outline" aria-hidden="true" />
                                    </Link>
                                </div>
                            </li>
                            <li>
                                <div className="collection-card" style={{ backgroundImage: `url(${IMAGES.collection2})` }}>
                                    <h3 className="h4 card-title">Women Collections</h3>
                                    <Link to="/product" className="btn btn-secondary">
                                        <span>Explore All</span>
                                        <ion-icon name="arrow-forward-outline" aria-hidden="true" />
                                    </Link>
                                </div>
                            </li>
                            <li>
                                <div className="collection-card" style={{ backgroundImage: `url(${IMAGES.collection3})` }}>
                                    <h3 className="h4 card-title">Sports Collections</h3>
                                    <Link to="/product" className="btn btn-secondary">
                                        <span>Explore All</span>
                                        <ion-icon name="arrow-forward-outline" aria-hidden="true" />
                                    </Link>
                                </div>
                            </li>
                        </ul>
                    </div>
                </section>

                <section className="section cta">
                    <div className="container">
                        <ul className="cta-list">
                            <li>
                                <div className="cta-card" style={{ backgroundImage: `url(${IMAGES.cta1})` }}>
                                    <p className="card-subtitle">Adidas Shoes</p>
                                    <h3 className="h2 card-title">The Summer Sale Off 50%</h3>
                                    <Link to="/product" className="btn btn-link">
                                        <span>Shop Now</span>
                                        <ion-icon name="arrow-forward-outline" aria-hidden="true" />
                                    </Link>
                                </div>
                            </li>
                            <li>
                                <div className="cta-card" style={{ backgroundImage: `url(${IMAGES.cta2})` }}>
                                    <p className="card-subtitle">Nike Shoes</p>
                                    <h3 className="h2 card-title">Makes Yourself Keep Sporty</h3>
                                    <Link to="/product" className="btn btn-link">
                                        <span>Shop Now</span>
                                        <ion-icon name="arrow-forward-outline" aria-hidden="true" />
                                    </Link>
                                </div>
                            </li>
                        </ul>
                    </div>
                </section>



                <section className="section service">
                    <div className="container">
                        <ul className="service-list">
                            <li className="service-item">
                                <div className="service-card">
                                    <div className="card-icon">
                                        <img src={IMAGES.service1} width={53} height={28} loading="lazy" alt="Service icon" />
                                    </div>
                                    <div>
                                        <h3 className="h4 card-title">Free Shiping</h3>
                                        <p className="card-text">
                                            All orders over <span>$150</span>
                                        </p>
                                    </div>
                                </div>
                            </li>
                            <li className="service-item">
                                <div className="service-card">
                                    <div className="card-icon">
                                        <img src={IMAGES.service3} width={40} height={40} loading="lazy" alt="Service icon" />
                                    </div>
                                    <div>
                                        <h3 className="h4 card-title">Free Returns</h3>
                                        <p className="card-text">
                                            Money back in 30 days
                                        </p>
                                    </div>
                                </div>
                            </li>
                            <li className="service-item">
                                <div className="service-card">
                                    <div className="card-icon">
                                        <img src={IMAGES.service4} width={40} height={40} loading="lazy" alt="Service icon" />
                                    </div>
                                    <div>
                                        <h3 className="h4 card-title">24/7 Support</h3>
                                        <p className="card-text">
                                            Get Quick Support
                                        </p>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </section>

            </>
        )
    }
}

export default Home