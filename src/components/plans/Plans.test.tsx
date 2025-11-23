import { render, screen } from '@testing-library/react';
import Plans from './Plans';

describe('Plans Component', () => {
  it('renders three plan cards', () => {
    render(<Plans />);
    // Since they don't have a specific role, we can query by class or just check for the headers/buttons count.
    // Let's use the buttons as a proxy for the number of cards since each card has one button.
    const buttons = screen.getAllByRole('button', { name: /buy now/i });
    expect(buttons).toHaveLength(3);
  });

  it('renders the correct prices', () => {
    render(<Plans />);
    expect(screen.getByText('$14')).toBeInTheDocument();
    expect(screen.getByText('$24')).toBeInTheDocument();
    expect(screen.getByText('$34')).toBeInTheDocument();
  });

  it('renders the popular plan with correct styles', () => {
    const { container } = render(<Plans />);
    const popularPlan = container.querySelector('.plan--popular');
    expect(popularPlan).toBeInTheDocument();

    const primaryCard = popularPlan?.querySelector('.card--primary');
    expect(primaryCard).toBeInTheDocument();

    // Check price inside popular plan
    expect(popularPlan).toHaveTextContent('$24');
  });

  it('renders standard plans with correct styles', () => {
    const { container } = render(<Plans />);
    const standardPlans = container.querySelectorAll('.plan:not(.plan--popular)');
    expect(standardPlans).toHaveLength(2);

    standardPlans.forEach(plan => {
      const secondaryCard = plan.querySelector('.card--secondary');
      expect(secondaryCard).toBeInTheDocument();
    });
  });

  it('renders plan features', () => {
    render(<Plans />);
    // Since features are repeated, getAllByText should return 3 for each unique feature text
    expect(screen.getAllByText('Unlimited Websites')).toHaveLength(3);
    expect(screen.getAllByText('Unlimited Bandwidth')).toHaveLength(3);
    expect(screen.getAllByText('100 GB SSD Sotrage')).toHaveLength(3); // Typo in source "Sotrage"
    expect(screen.getAllByText('3 GB RAM')).toHaveLength(3);
  });

  it('renders badges on all plans', () => {
    render(<Plans />);
    expect(screen.getAllByText('10% OFF')).toHaveLength(3);
  });

  it('matches the snapshot', () => {
    const { container } = render(<Plans />);
    expect(container).toMatchSnapshot();
  });
});
