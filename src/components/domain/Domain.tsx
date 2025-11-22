

export default function Domain() {
    return (
        <section data-aos="zoom-in-up" className="block container block-domain">
            <header className="block__header">
                <h2>Starting at $10 per month</h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti,
                    exercitationem?
                </p>
            </header>
            <div className="input-group">
                <input
                    aria-label="Domain"
                    type="text"
                    className="input"
                    placeholder="Enter domain name here..."
                />
                <button className="btn btn--accent">
                    <svg className="icon icon--white">
                        <use href="images/sprite.svg#search"></use></svg
                    >Search
                </button>
            </div>
            <ul className="list block-domain__prices">
                <li><span className="badge badge--secondary">.com $9</span></li>
                <li>.sg $10</li>
                <li>.space $11</li>
                <li>.info $14</li>
                <li>.net $10</li>
                <li>.xyz $10</li>
            </ul>
        </section>
    )
}