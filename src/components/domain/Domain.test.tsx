import { render, screen } from '@testing-library/react';
import Domain from './Domain';

describe("Domain Component", () => {
  it('renders the correct heading', () => {
    render(<Domain />);
    const headingElement = screen.getByRole('heading', { name: 'Starting at $10 per month' });
    expect(headingElement).toBeInTheDocument();
  });

  it('renders the domain input field', () => {
    render(<Domain />);
    const inputElement = screen.getByPlaceholderText('Enter domain name here...');
    expect(inputElement).toBeInTheDocument();
  });

  it('renders the search button', () => {
    render(<Domain />);
    const buttonElement = screen.getByRole('button', { name: /search/i });
    expect(buttonElement).toBeInTheDocument();
  });

  it('renders the correct domain prices', () => {
    render(<Domain />);
    const prices = ['.com $9', '.sg $10', '.space $11', '.info $14', '.net $10', '.xyz $10'];
    prices.forEach(price => {
      const priceElement = screen.getByText(price);
      expect(priceElement).toBeInTheDocument();
    })
  });

  it('matches the snapshot', () => {
    const { container } = render(<Domain />);
    expect(container).toMatchSnapshot();
  });

});
