

export default function Plans() {
    return (
        <section data-aos="fade-up" className="block container block-plans">
            <div className="grid grid--1x3">
                <div className="plan">
                    <div className="card card--secondary">
                        <header className="card__header">
                            <h3 className="plan__name">Entry</h3>
                            <span className="plan__price">$14</span>
                            <span className="plan__billing-cycle">/month</span>
                            <span className="badge badge--secondary badge--small">10% OFF</span>
                            <span className="plan__description">Easy start on the cloud</span>
                        </header>
                        <div className="card__body">
                            <ul className="list list--tick">
                                <li className="list__item">Unlimited Websites</li>
                                <li className="list__item">Unlimited Bandwidth</li>
                                <li className="list__item">100 GB SSD Sotrage</li>
                                <li className="list__item">3 GB RAM</li>
                            </ul>
                            <button className="btn btn--outline btn--block">Buy Now</button>
                        </div>
                    </div>
                </div>
                <div className="plan plan--popular">
                    <div className="card card--primary">
                        <header className="card__header">
                            <h3 className="plan__name">Entry</h3>
                            <span className="plan__price">$24</span>
                            <span className="plan__billing-cycle">/month</span>
                            <span className="badge badge--primary badge--small">10% OFF</span>
                            <span className="plan__description">Easy start on the cloud</span>
                        </header>
                        <div className="card__body">
                            <ul className="list list--tick">
                                <li className="list__item">Unlimited Websites</li>
                                <li className="list__item">Unlimited Bandwidth</li>
                                <li className="list__item">100 GB SSD Sotrage</li>
                                <li className="list__item">3 GB RAM</li>
                            </ul>
                            <button className="btn btn--outline btn--block">Buy Now</button>
                        </div>
                    </div>
                </div>
                <div className="plan">
                    <div className="card card--secondary">
                        <header className="card__header">
                            <h3 className="plan__name">Entry</h3>
                            <span className="plan__price">$34</span>
                            <span className="plan__billing-cycle">/month</span>
                            <span className="badge badge--secondary badge--small">10% OFF</span>
                            <span className="plan__description">Easy start on the cloud</span>
                        </header>
                        <div className="card__body">
                            <ul className="list list--tick">
                                <li className="list__item">Unlimited Websites</li>
                                <li className="list__item">Unlimited Bandwidth</li>
                                <li className="list__item">100 GB SSD Sotrage</li>
                                <li className="list__item">3 GB RAM</li>
                            </ul>
                            <button className="btn btn--outline btn--block">Buy Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
