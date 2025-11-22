import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Navbar from './Navbar';

describe('Navbar Component', () => {
  it('should toggle the expanded state when the toggler is clicked', async () => {
    const { container } = render(<Navbar />);

    const toggler = container.querySelector('svg');
    const navElement = container.querySelector('nav');

    expect(toggler).toBeInTheDocument();
    expect(navElement).toBeInTheDocument();

    expect(navElement).not.toHaveClass('collapsible--expanded');

    await userEvent.click(toggler!);

    expect(navElement).toHaveClass('collapsible--expanded');
  });

  it('renders the brand logo', () => {
    render(<Navbar />);
    const brandLink = screen.getByRole('link', { name: /moshify/i });
    expect(brandLink).toBeInTheDocument();
    expect(brandLink).toHaveAttribute('href', '/');
  });

  it('renders the logo image', () => {
    render(<Navbar />);
    const logoElement = screen.getByRole('img', { name: 'moshify brand logo' });
    expect(logoElement).toBeInTheDocument();
  });

  it('renders all navigation links', () => {
    render(<Navbar />);
    const links = ['Hosting', 'VPS', 'Domain', 'Pricing'];

    links.forEach(linkText => {
      const link = screen.getByRole('link', { name: linkText });
      expect(link).toBeInTheDocument();
      expect(link).toHaveAttribute('href', 'https://codewithmosh.com');
    });
  });
});
