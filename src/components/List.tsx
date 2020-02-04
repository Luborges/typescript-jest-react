import React, { FunctionComponent, useState } from 'react';
import { 
    ListBox,
    ItemInput,
    ListInput,
    CreateItem
} from './styles';

const TodoList:FunctionComponent<{ 
    initialItemName?: string, 
    initialItemsLists?: Array<any>, 
    list?: string 
    }> = ( { initialItemName = null, initialItemsLists = [], list = ''} ) => {
    const [itemName, setItemName] = useState(initialItemName);
    const [itemsList, setItemsList] = useState(initialItemsLists);
    const [listName, setListName] = useState(list);

    const createItem = () => {
        setItemsList(lists => [...lists, itemName]);
        setItemName(null);
    }

    const changeListName = (evt = {target: {value: ''}}) => {
        setListName(evt.target.value);
    }

    const addItemInput = () => {
        setItemName('');
    }

    const changeItemName = (evt = {target: {value: ''}}, i = 0) => {
        let temp = itemsList.slice();
        temp[i] = evt.target.value;
        setItemsList(temp);
    }

    return (
        <ListBox>
            <ListInput onChange={evt => changeListName(evt)} value={listName} />
            {
                itemsList.map((item, i) => <ItemInput key={'item-'+i} className='items'
                    onChange={evt => changeItemName(evt, i)} value={item} />)
            }
            {itemName !== null && itemName !== undefined &&
                    <ItemInput id='input-new-item'
                        onChange={evt => setItemName(evt.target.value)} onBlur={() => createItem()} />
                }
                <br />
            <CreateItem id='create-item' onClick={() => addItemInput()}>+ Item</CreateItem>
        </ListBox>
    )
}

export default TodoList;