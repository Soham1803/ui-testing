import { render, screen } from '@testing-library/react';
import Features from './Features';

describe('Features Component', () => {
  it('renders the Features component correctly', () => {
    render(<Features />);
    expect(screen.getByText('Host on the Cloud to Keep Growing')).toBeInTheDocument();
  });

  it('has all the feature headings', () => {
    render(<Features />);
    expect(screen.getByText('Super Easy to Use')).toBeInTheDocument();
    expect(screen.getByText('Simply Fast Websites')).toBeInTheDocument();
    expect(screen.getByText('Wordpress Made Easy')).toBeInTheDocument();
    expect(screen.getByText('24/7 Expert Support')).toBeInTheDocument();
  });

  it('contains 4 feature articles', () => {
    render(<Features />);
    const articles = screen.getAllByRole('article');
    expect(articles.length).toBe(4);
  });

  it('contains Learn More links in each article', () => {
    render(<Features />);
    const links = screen.getAllByRole('link', { name: /Learn More/ });
    expect(links.length).toBe(4);
  });

  it('renders responsive images with picture tags', () => {
    const { container } = render(<Features />);
    const pictures = container.querySelectorAll('picture');
    expect(pictures.length).toBe(4);

    const expectedImages = [
      { name: 'easy', alt: '' },
      { name: 'fast', alt: '' },
      { name: 'wordpress', alt: '' },
      { name: 'support', alt: '' },
    ];

    pictures.forEach((picture, index) => {
      const { name } = expectedImages[index];

      // Check for WebP source
      const webpSource = picture.querySelector('source[type="image/webp"]');
      expect(webpSource).toBeInTheDocument();
      expect(webpSource).toHaveAttribute('srcset', `images/${name}.webp 1x, images/${name}@2x.webp 2x`);

      // Check for JPG source
      const jpgSource = picture.querySelector('source[type="image/jpg"]');
      expect(jpgSource).toBeInTheDocument();
      expect(jpgSource).toHaveAttribute('srcset', `images/${name}.jpg 1x, images/${name}@2x.jpg 2x`);

      // Check for fallback image
      const img = picture.querySelector('img');
      expect(img).toBeInTheDocument();
      expect(img).toHaveAttribute('src', `images/${name}@2x.jpg`);
      expect(img).toHaveClass('feature__image');

    });
  });

  it('renders SVG icons for each feature', () => {
    const { container } = render(<Features />);
    const icons = container.querySelectorAll('svg.icon');
    expect(icons.length).toBe(4);

    const expectedIcons = ['easy', 'computer', 'wordpress', 'clock'];

    icons.forEach((icon, index) => {
      const useTag = icon.querySelector('use');
      expect(useTag).toBeInTheDocument();
      expect(useTag).toHaveAttribute('href', `images/sprite.svg#${expectedIcons[index]}`);
    });
  });

})
