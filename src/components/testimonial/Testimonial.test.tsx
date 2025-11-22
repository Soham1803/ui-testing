import { render, screen } from '@testing-library/react';
import Testimonial from './Testimonial';

describe('Testimonial Component', () => {
    it('renders the section header correctly', () => {
        render(<Testimonial />);
        expect(screen.getByRole('heading', { level: 2, name: /what our customers are saying/i })).toBeInTheDocument();
        expect(screen.getByText(/lorem ipsum dolor sit amet/i)).toBeInTheDocument();
    });

    it('renders the testimonial image with correct alt text', () => {
        render(<Testimonial />);
        const image = screen.getByRole('img', { name: /a happy, smiling customer/i });
        expect(image).toBeInTheDocument();
        expect(image).toHaveAttribute('src', 'images/testimonial.jpg');
    });

    it('renders the quote content', () => {
        render(<Testimonial />);
        const blockquote = screen.getByRole('blockquote');
        expect(blockquote).toBeInTheDocument();
        expect(screen.getByText(/incidunt optio officiis dolore/i)).toBeInTheDocument();
    });

    it('renders the author and organization', () => {
        render(<Testimonial />);
        expect(screen.getByRole('heading', { level: 3, name: /john smith/i })).toBeInTheDocument();
        expect(screen.getByText(/abc company/i)).toBeInTheDocument();
    });

    it('renders the icons with correct sprites', () => {
        const { container } = render(<Testimonial />);
        const icons = container.querySelectorAll('svg.icon');

        // We expect 2 icons: quotes and line
        expect(icons).toHaveLength(2);

        const quotesIcon = icons[0];
        expect(quotesIcon.querySelector('use')).toHaveAttribute('href', 'images/sprite.svg#quotes');

        const lineIcon = icons[1];
        expect(lineIcon.querySelector('use')).toHaveAttribute('href', 'images/sprite.svg#line');
    });
});
