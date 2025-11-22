import { useState, type ReactNode } from "react";

type CollapsibleProps = {
    title: string;
    children: ReactNode;
}

export default function Collapsible({ title, children }: CollapsibleProps) {

    const [expanded, setExpanded] = useState(false);

    return (
        <section className={`collapsible footer__section ${expanded ? 'collapsible--expanded' : ''}`}>
            <div className="collapsible__header">
                <h2 className="collapsible__heading footer__heading">{title}</h2>
                <svg onClick={() => setExpanded(!expanded)} className="icon icon--white collapsible__chevron">
                    <use href="images/sprite.svg#chevron"></use>
                </svg>
            </div>
            <div className="collapsible__content">
                {children}
            </div>
        </section>
    );
}