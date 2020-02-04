import React, { FunctionComponent } from 'react';
import TodoList from '../../components/TodoList';
import { 
    Container,
    Title,
    Wrap
} from './styles';

const Login:FunctionComponent<{}> = () => {

    return (
        <Wrap>
            <Container>
                <Title>Bem-vindo, está é sua HomePage</Title>
            </Container>
            <TodoList />
        </Wrap>
    )
}

export default Login;