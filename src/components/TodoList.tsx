import React, { FunctionComponent, useState } from 'react';
import List from './List';
import { 
    Title,
    ListContext,
    CreateList,
    ListNewInput,
    ListContainer,
    WrapperList
} from './styles';

const TodoList:FunctionComponent<{ initialListName?: string, initialLists?: Array<any> }> = ( { initialListName = null, initialLists = [] } ) => {
    const [listName, setListName] = useState(initialListName);
    const [lists, setLists] = useState(initialLists);

    const addListInput = () => {
        setListName('');
    }

    const createList = () => {
        setLists(lists => [...lists, listName]);
        setListName(null);
    }

    return (
        <ListContext>
            <Title>Suas listas</Title>
            <CreateList id='create-list' onClick={() => addListInput()}>+</CreateList>
            <WrapperList>
                {
                    lists.map((item, i) => 
                        <ListContainer key={'list-'+i} className='lists'>
                            <List list={item} />
                        </ListContainer>
                    )
                }
                {
                listName !== null && listName !== undefined &&
                    <ListNewInput id='input-new-list'
                        onChange={evt => setListName(evt.target.value)} onBlur={() => createList()} />
                }
            </WrapperList>
        </ListContext>
    )
}

// <ItemContainer value={item} />

export default TodoList;