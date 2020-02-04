import styled from 'styled-components';

export const Title = styled.div`
    width: 94%;
    display: inline-block;
    font-size: 20px;
    text-align: center;
    margin: 0;
`;

export const ListContext = styled.div`
    overflow-y: auto;
    overflow-x: hidden;
    width: 500px;
    min-height: 400px;
    margin-top: 15%;
    padding: 0px 20px 3px 0px;
    background-color: #777;
    border-radius: 8px;
`;

export const ListContainer = styled.div`
    margin: 5px;
`;

export const WrapperList = styled.div`
    width: 100%;
    max-width: 500px;
    min-height: 400px;
    display: flex;
    overflow-x: auto;
    padding: 5px;
    &::-webkit-scrollbar{
        height: 6px;
        width: 4px;
    }
    &::-webkit-scrollbar-thumb:horizontal{
        background: #000;
        border-radius: 10px;
    }
`;

export const CreateList = styled.button`
    width: 6%;
    display: inline-block;
    background: transparent;
    text-align: right;
    border: 0px;
    font-size: 22px;
    color: white;
    cursor: pointer;
`;

export const CreateItem = styled.button`
    width: 90%;
    border-radius: 10px;
    border: 0px;
    align-self: center;
`;

export const ListInput = styled.input`
    border-radius: 5px;
    max-height: 15px;
    font-weight: 600;
`;

export const ItemInput = styled.input`
    border-radius: 3px;
    max-height: 15px;
    margin: 5px;
`;

export const ListBox = styled.div`
    display: flex;
    flex-direction: column;
`;

export const InputBox = styled.div`
    margin-top: 5px;
`;