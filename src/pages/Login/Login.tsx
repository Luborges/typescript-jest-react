import React, { FunctionComponent, useState } from 'react';
import { 
    Button,
    Container,
    Input,
    Form,
    Label,
    TextEnter,
    Title
} from './login-style';

const Login:FunctionComponent<{ initialEmail?: string, initialPassword?: string }> = ({ initialEmail = '', initialPassword = '' }) => {
  const [email, setEmail] = useState(initialEmail);
  const [password, setPassword] = useState(initialPassword);
  
    function handleSubmit(evt: { preventDefault: () => void; }){
        evt.preventDefault();
        
        
        if (email==='email@dominio.com' && password === 'pass'){
            console.log('correct pass');
            window.location.assign('/logged');
        }
        else{
            console.log('incorrect pass');
        }

        //const response = await api.post('/sessions', {email});
        //const { _id } = response.data;

        //localStorage.setItem('user', _id);

        //history.push('/dashboard');
    }

    return (
        <Container>
            <Title>Bem-vindo, entre com sua conta</Title>
            <Form id='form-login' onSubmit={handleSubmit}>
            <TextEnter>
                <Label htmlFor='email'>E-mail: </Label>
                <Input type='email' id='email' placeholder="Seu e-mail" 
                    value={email}
                    onChange={evt => setEmail(evt.target.value)} />
            </TextEnter>
            <TextEnter>
                <Label htmlFor='password'>Senha: </Label> 
                <Input type='password' id='password' placeholder="Sua senha"
                    value={password}
                    onChange={evt => setPassword(evt.target.value)} />
            </TextEnter>
            <TextEnter>
                <Button id='submit-button' className='btn' type='submit'>Entrar</Button>
            </TextEnter>
            </Form>
        </Container>
    )
}

export default Login;