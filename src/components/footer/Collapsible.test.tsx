import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Collapsible from './Collapsible';

describe('Collapsible Component', () => {
    it('renders the title and children', () => {
        render(
            <Collapsible title="Test Title">
                <p>Test Content</p>
            </Collapsible>
        );

        expect(screen.getByText('Test Title')).toBeInTheDocument();
        expect(screen.getByText('Test Content')).toBeInTheDocument();
    });

    it('is collapsed by default', () => {
        const { container } = render(
            <Collapsible title="Test Title">
                <p>Test Content</p>
            </Collapsible>
        );

        // Check that the section does not have the expanded class
        const section = container.querySelector('section');
        expect(section).toHaveClass('collapsible');
        expect(section).not.toHaveClass('collapsible--expanded');
    });

    it('expands when the chevron is clicked', async () => {
        const user = userEvent.setup();
        const { container } = render(
            <Collapsible title="Test Title">
                <p>Test Content</p>
            </Collapsible>
        );

        const chevron = container.querySelector('.collapsible__chevron');
        expect(chevron).toBeInTheDocument();

        await user.click(chevron!);

        const section = container.querySelector('section');
        expect(section).toHaveClass('collapsible--expanded');
    });

    it('collapses when clicked again', async () => {
        const user = userEvent.setup();
        const { container } = render(
            <Collapsible title="Test Title">
                <p>Test Content</p>
            </Collapsible>
        );

        const chevron = container.querySelector('.collapsible__chevron');

        // Click to expand
        await user.click(chevron!);
        expect(container.querySelector('section')).toHaveClass('collapsible--expanded');

        // Click to collapse
        await user.click(chevron!);
        expect(container.querySelector('section')).not.toHaveClass('collapsible--expanded');
    });
});
