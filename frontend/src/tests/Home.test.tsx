// Link.react.test.js
import React from 'react';
import Home from '../pages/Home';
import Adapter from 'enzyme-adapter-react-16';
import { configure } from 'enzyme';
import { render } from '@testing-library/react';

configure({adapter: new Adapter()});

test('renders HomePage', () => {
    const { getByText } = render(<Home />);

    const text = getByText(/HomePage/i);
    expect(text).toBeInTheDocument();
});