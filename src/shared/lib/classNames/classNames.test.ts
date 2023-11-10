import { classNames } from 'shared/lib/classNames/classNames';

describe('classNames test', () => {
    test('with one class', () => {
        expect(classNames('testClass', {}, [])).toBe('testClass');
    });
    test('with mods', () => {
        expect(classNames('testClass', { hovered: true, scrolled: true }, [])).toBe(
            'testClass hovered scrolled',
        );
    });
    test('with additional and mods are true', () => {
        expect(
            classNames('testClass', { hovered: true, scrolled: true }, ['newClass']),
        ).toBe('testClass newClass hovered scrolled');
    });
    test('with additional and one mod is false', () => {
        expect(
            classNames('testClass', { hovered: true, scrolled: false }, ['newClass']),
        ).toBe('testClass newClass hovered');
    });
    test('with additional and one mod is undefined', () => {
        expect(
            classNames('testClass', { hovered: true, scrolled: undefined }, [
                'newClass',
            ]),
        ).toBe('testClass newClass hovered');
    });
});
