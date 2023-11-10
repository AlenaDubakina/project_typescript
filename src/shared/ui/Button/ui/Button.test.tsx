import { render, screen } from '@testing-library/react';
import { Button } from 'shared/ui/Button';
import { ButtonTheme } from './Button';

describe('Button test', () => {
    test('text button test', () => {
        render(<Button>Test</Button>);
        expect(screen.getByText('Test')).toBeInTheDocument();
    });
    test('class button test', () => {
        render(<Button theme={ButtonTheme.CLEAR}>Test</Button>);
        expect(screen.getByText('Test')).toHaveClass('clear');
        screen.debug();
    });
});
