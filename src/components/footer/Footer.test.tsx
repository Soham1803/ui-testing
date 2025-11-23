import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import Footer from './Footer';

describe('Footer Component', () => {
  it('renders the correct copyright text', () => {
    render(<Footer />);
    const copyrightElement = screen.getByText(/Copyright 2020 Mosh Hamedani/i);
    expect(copyrightElement).toBeInTheDocument();
  });

  it('renders the logo image', () => {
    render(<Footer />);
    const logoElement = screen.getByRole('img', { name: 'moshify brand logo' });
    expect(logoElement).toBeInTheDocument();
  });

  it('contains all collapsible sections with correct titles', () => {
    render(<Footer />);
    const sectionTitles = ['Products', 'Company', 'Support', 'Domains'];
    sectionTitles.forEach(title => {
      const sectionElement = screen.getByText(title);
      expect(sectionElement).toBeInTheDocument();
    });
  });

  it('expands collapsible sections when chevron is clicked', async () => {
    const user = userEvent.setup();
    render(<Footer />);

    const sections = [
      { title: 'Products', links: ['Website Hosting', 'Free Automated Wordpress', 'Migrations'] },
      { title: 'Company', links: ['About', 'Affiliates', 'Blog'] },
      { title: 'Support', links: ['Contact', 'Knowledge Base', 'FAQ'] },
      { title: 'Domains', links: ['Domain Checker', 'Domain Transfer', 'Free Domain'] },
    ];

    for (const section of sections) {
      const titleElement = screen.getByText(section.title);
      // Find the parent collapsible section
      const collapsibleSection = titleElement.closest('.collapsible');
      expect(collapsibleSection).toBeInTheDocument();

      // Find the chevron icon within this section
      // We look for the svg with class 'collapsible__chevron' inside the header
      const chevron = collapsibleSection?.querySelector('.collapsible__chevron');
      expect(chevron).toBeInTheDocument();

      // Initially, it should not be expanded (checking class based on implementation)
      expect(collapsibleSection).not.toHaveClass('collapsible--expanded');

      // Click the chevron
      if (chevron) {
        await user.click(chevron);
      }

      // Now it should be expanded
      expect(collapsibleSection).toHaveClass('collapsible--expanded');

      // Verify links are present
      section.links.forEach(linkText => {
        expect(screen.getByText(linkText)).toBeInTheDocument();
      });
    }
  });

  it('matches the snapshot', () => {
    const { container } = render(<Footer />);
    expect(container).toMatchSnapshot();
  });
});


