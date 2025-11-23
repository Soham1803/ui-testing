import { render, screen } from '@testing-library/react';
import App from './App';

describe('App Component', () => {
    it('renders the application without crashing', () => {
        render(<App />);
    });

    it('renders key sections of the landing page', () => {
        render(<App />);

        // Navbar
        expect(screen.getByRole('navigation')).toBeInTheDocument();

        // Hero
        expect(screen.getByRole('heading', { name: /Cloud Hosting for Pros/i })).toBeInTheDocument();

        // Domain
        expect(screen.getByPlaceholderText('Enter domain name here...')).toBeInTheDocument();

        // Plans
        expect(screen.getAllByText(/Unlimited Websites/i).length).toBeGreaterThan(0);

        // Features
        expect(screen.getByRole('heading', { name: /Host on the Cloud to Keep Growing/i })).toBeInTheDocument();

        // Showcase
        expect(screen.getByRole('heading', { name: /User-friendly Control Panel/i })).toBeInTheDocument();

        // Testimonial
        expect(screen.getByRole('heading', { name: /What Our Customers Are Saying/i })).toBeInTheDocument();

        // Callout
        expect(screen.getByRole('heading', { name: /Ready to Get Started\?/i })).toBeInTheDocument();

        // Footer
        expect(screen.getByText(/Copyright 2020 Mosh Hamedani/i)).toBeInTheDocument();
    });
});
