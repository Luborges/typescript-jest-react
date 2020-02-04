// Link.react.test.js
import React from 'react';
import TodoList from '../components/TodoList';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';

configure({adapter: new Adapter()});

describe('TODO', () => {
    const testValues = {
        
    };

    const todoComponent = shallow(
        <TodoList {...testValues} />
    );

    it('Create List', () => {
        todoComponent.find('#create-list').simulate('click');
        todoComponent.find('#input-new-list').simulate('change', {target: {value: 'To-do'} });
        todoComponent.find('#input-new-list').simulate('blur');
        expect(todoComponent.find('.lists').length).toEqual(1);
    });
});