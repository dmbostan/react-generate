import React from 'react';
import Demo from './Demo';
import { render } from '@testing-library/react';

describe('Demo', () => {
    it('should contain text', () => {
        const { getByText } = render(<Demo text="Hello, World!" />);
        const element = getByText('Hello, World!');
        expect(element).toBeInTheDocument();
    });

    it('should match snapshot', () => {
        const component = renderer.create(<Demo text="Hello, World!" />);
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
})
