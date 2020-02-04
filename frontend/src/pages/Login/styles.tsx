import styled from 'styled-components';

export const Button = styled.button`
    width: 100%;
    background-color: #00B9BC;
    color: #eee;
    font-weight: bold;
    margin-top: 10px;
    text-transform: uppercase;
    text-align: center;
    justify-content: center;
    align-items: center;
`;

export const Container = styled.div`
    background:rgba(58,63,68,0.5);
    border-radius: 5px;
    box-shadow: 0 1.5px 0 0 rgba(0,0,0,0.1);
    width:450px;
    display: flex;  
    flex-direction: column;
    justify-content: center;
    align-items: center;
    align-self: center;
`;

export const Form = styled.form`
    width: 65%;
    min-width: 300px;
    justify-content: flex-start;
    padding: 10px 5px 10px 5px;
`;

export const Input = styled.input`
    width: 79%;
`;

export const Label = styled.label`
    max-width: 20%;
`;

export const TextEnter = styled.div`
    margin: 5px;
`;

export const Title = styled.label`
    font-size:20px;
    text-align: center;
    padding: 20px 20px 0;
    margin:0;
`;