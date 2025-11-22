

export default function Callout() {
    return (
        <div className="container">
            <div className="callout callout--primary callout-signup">
                <div className="grid grid--1x2">
                    <div className="callout__content">
                        <h2 className="callout__heading">Ready to Get Started?</h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi
                            voluptate tempora qui distinctio consequatur aliquid pariatur
                            cupiditate quas cum fugit.
                        </p>
                    </div>
                    <a
                        target="_blank"
                        href="https://codewithmosh.com"
                        className="btn btn--secondary btn--stretched"
                    >Get Started</a
                    >
                </div>
            </div>
        </div>
    );
}