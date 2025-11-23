import { render, screen } from '@testing-library/react';
import Showcase from './Showcase';

describe('Showcase Component', () => {
  it('should render the Showcase component with title and description', () => {
    render(<Showcase />);
    expect(screen.getByRole('heading', { name: /User-friendly Control Panel/i })).toBeInTheDocument();
  });

  it('should render responsive image with correct sources', () => {
    const { container } = render(<Showcase />);

    const picture = container.querySelector('picture');
    expect(picture).toBeInTheDocument();

    // Check for WebP source
    const webpSource = picture?.querySelector('source[type="image/webp"]');
    expect(webpSource).toBeInTheDocument();
    expect(webpSource).toHaveAttribute('srcset', 'images/ipad.webp 1x, images/ipad@2x.webp 2x');

    // Check for PNG source
    const pngSource = picture?.querySelector('source[type="image/png"]');
    expect(pngSource).toBeInTheDocument();
    expect(pngSource).toHaveAttribute('srcset', 'images/ipad.png 1x, images/ipad@2x.png 2x');

    // Check for img fallback
    const image = picture?.querySelector('img');
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', 'images/ipad.png');
  });

  it('should render the list of features', () => {
    render(<Showcase />);
    const listItems = screen.getAllByRole('listitem');
    expect(listItems).toHaveLength(3);
  });

  it('should render correct feature titles and descriptions', () => {
    render(<Showcase />);

    const titles = [
      'Easy Start & Managed Updates',
      'Staging, GIT & WP-CLI',
      'Dynamic Caching & More'
    ];

    titles.forEach(title => {
      expect(screen.getByRole('heading', { name: title })).toBeInTheDocument();
    });

    // Check that descriptions are present (checking one common text part or all)
    const descriptions = screen.getAllByText(/Lorem ipsum dolor sit amet/i);
    expect(descriptions).toHaveLength(3);
  });

  it('should render feature icons with correct sprites', () => {
    const { container } = render(<Showcase />);
    const icons = container.querySelectorAll('svg.icon');

    // We expect 3 icons in the list
    expect(icons).toHaveLength(3);

    const expectedIcons = ['snap', 'growth', 'wordpress'];

    icons.forEach((icon, index) => {
      const useTag = icon.querySelector('use');
      expect(useTag).toBeInTheDocument();
      expect(useTag).toHaveAttribute('href', `images/sprite.svg#${expectedIcons[index]}`);
    });
  });

  it('matches the snapshot', () => {
    const { container } = render(<Showcase />);
    expect(container).toMatchSnapshot();
  });
});
