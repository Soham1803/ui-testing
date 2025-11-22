import { render, screen } from '@testing-library/react';
import Plans from './Plans';

describe('Plans Component', () => {
  it('renders three plan cards', () => {
    render(<Plans />);
    const plans = screen.getAllByText(/Entry/i);
    // There are 3 headers with "Entry"
    expect(plans).toHaveLength(3);
  });

  it('renders correct prices for each plan', () => {
    render(<Plans />);
    expect(screen.getByText('$14')).toBeInTheDocument();
    expect(screen.getByText('$24')).toBeInTheDocument();
    expect(screen.getByText('$34')).toBeInTheDocument();
  });

  it('renders "Buy Now" buttons for each plan', () => {
    render(<Plans />);
    const buttons = screen.getAllByRole('button', { name: /buy now/i });
    expect(buttons).toHaveLength(3);
  });

  it('renders features list for plans', () => {
    render(<Plans />);
    // "Unlimited Websites" appears in all 3 plans
    const websitesFeatures = screen.getAllByText(/Unlimited Websites/i);
    expect(websitesFeatures).toHaveLength(3);

    const bandwidthFeatures = screen.getAllByText(/Unlimited Bandwidth/i);
    expect(bandwidthFeatures).toHaveLength(3);
  });

  it('renders the popular plan with distinct styling', () => {
    const { container } = render(<Plans />);
    const popularPlan = container.querySelector('.plan--popular');
    expect(popularPlan).toBeInTheDocument();

    // Check if the popular plan contains the $24 price
    expect(popularPlan).toHaveTextContent('$24');

    // Check if it has the primary card style
    const cardPrimary = popularPlan?.querySelector('.card--primary');
    expect(cardPrimary).toBeInTheDocument();
  });

  it('renders badges for discounts', () => {
    render(<Plans />);
    const badges = screen.getAllByText(/10% OFF/i);
    expect(badges).toHaveLength(3);
  });
});
