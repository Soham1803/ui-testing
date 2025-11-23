import { render, screen } from '@testing-library/react';
import Hero from './Hero';

describe('Hero Component', () => {
  it('renders the hero section with correct content', () => {
    render(<Hero />);

    // Check for heading
    const heading = screen.getByRole('heading', { name: /Cloud Hosting for Pros/i });
    expect(heading).toBeInTheDocument();

    // Check for tagline
    const tagline = screen.getByText(/Deploy your websites in less than 60 seconds./i);
    expect(tagline).toBeInTheDocument();

    // Check for Get Started button
    const getStartedButton = screen.getByRole('link', { name: /Get Started/i });
    expect(getStartedButton).toBeInTheDocument();
    expect(getStartedButton).toHaveAttribute('href', 'https://codewithmosh.com');
  });

  it('renders responsive images with picture tag', () => {
    const { container } = render(<Hero />);
    const picture = container.querySelector('picture');

    expect(picture).toBeInTheDocument();

    // Check for WebP source
    const webpSource = picture?.querySelector('source[type="image/webp"]');
    expect(webpSource).toBeInTheDocument();

    expect(webpSource).toHaveAttribute('srcset', 'images/banner.webp 1x, images/banner@2x.webp 2x');

    // Check for PNG source
    const pngSource = picture?.querySelector('source[type="image/png"]');
    expect(pngSource).toBeInTheDocument();

    expect(pngSource).toHaveAttribute('srcset', 'images/banner.png 1x, images/banner@2x.png 2x');

    // Check for fallback image
    const image = picture?.querySelector('img');
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', 'images/banner.png');
    expect(image).toHaveClass('hero__image');

  });

  it('matches the snapshot', () => {
    const { container } = render(<Hero />);
    expect(container).toMatchSnapshot();
  });
});
