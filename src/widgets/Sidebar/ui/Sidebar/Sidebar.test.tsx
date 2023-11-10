import { fireEvent, screen } from '@testing-library/react';
import { renderWithTranslation }
    from 'shared/lib/tests/renderWithTranslation/renderWithTranslation';
import { Sidebar } from 'widgets/Sidebar';

describe('Sidebar Test', () => {
    test('Sidebar', () => {
        renderWithTranslation(<Sidebar />);
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    });
    test('Sidebar', () => {
        renderWithTranslation(<Sidebar />);
        const btnToggle = screen.getByTestId('sidebar-toggle');
        fireEvent.click(btnToggle);
        expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
    });
});
