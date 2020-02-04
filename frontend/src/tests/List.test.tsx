// Link.react.test.js
import React from 'react';
import List from '../components/List';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';

configure({adapter: new Adapter()});

describe('List', () => {
    const testValues = {
        
    };

    const component = shallow(
        <List {...testValues} />
    );

    it('Create Item', () => {
        component.find('#create-item').simulate('click');
        component.find('#input-new-item').simulate('change', {target: {value: 'item 01'} });
        component.find('#input-new-item').simulate('blur');
        expect(component.find('.items').length).toEqual(1);
        expect(component.find('.items').prop('value')).toEqual('item 01');
    });
});