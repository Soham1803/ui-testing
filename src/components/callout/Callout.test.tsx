import { screen, render } from '@testing-library/react';
import Callout from './Callout';


describe("Callout Component", () => {
  it('renders the correct heading', () => {
    render(<Callout />);
    const headingElement = screen.getByRole('heading', { name: 'Ready to Get Started?' });
    expect(headingElement).toBeInTheDocument();
  })

  it('renders with the correct labelled link', () => {
    render(<Callout />);
    const linkElement = screen.getByRole('link', { name: 'Get Started' });
    expect(linkElement).toBeInTheDocument();
  })

  it('matches the snapshot', () => {
    const { container } = render(<Callout />);
    expect(container).toMatchSnapshot();
  });
});
