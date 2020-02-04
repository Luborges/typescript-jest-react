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
    background-color: #777;
    padding-bottom: 3px;
`;

export const ListContainer = styled.div`
    margin: 5px;
`;

export const WrapperList = styled.div`
    width: 100%;
    max-width: 500px;
    display: flex;
    overflow-x: auto;
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
    border: 0px;
    font-size: 22px;
    color: white;
    cursor: pointer;
`;

export const CreateItem = styled.button`

`;

export const ListNewInput = styled.input`
    max-height: 15px;
    margin: 5px;
`;

export const ListInput = styled.input`
    max-height: 15px;
`;

export const ListBox = styled.div`
    display: flex;
    flex-direction: column;
`;