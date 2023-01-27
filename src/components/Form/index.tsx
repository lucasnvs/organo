import Button from '../Button';
import DropDown from '../DropDown';
import TextField from '../TextField';
import { useState } from 'react';
import './Form.css';
import { IEmployed } from '../../shared/interfaces/IEmployed';

interface FormProps {
    onEmployedRegistered: (employed: IEmployed) => void
    teams: string[]
}

const Form = (props: FormProps) => {

    const [ name, setName] = useState('');
    const [ role, setRole] = useState('');
    const [ image, setImage] = useState('');
    const [ team, setTeam] = useState('');


    const onSave = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log('Form foi submetido => ', name, role, image, team)
        props.onEmployedRegistered({
            name,
            role,
            image,
            team
        })

        setName('');
        setRole('');
        setImage('');
        setTeam('');
    }

    return (
        <section className='form'>
            <form onSubmit={onSave}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <TextField 
                    required={true} 
                    label='Nome' 
                    placeholder='Digite o seu nome'
                    value={name}
                    onTyping={value => setName(value)}
                />
                <TextField 
                    required={true} 
                    label='Cargo' 
                    placeholder='Digite o seu cargo'
                    value={role}
                    onTyping={value => setRole(value)} 
                />
                <TextField 
                    label='Imagem' 
                    placeholder='Digite o endereço da imagem'
                    value={image}
                    onTyping={value => setImage(value)}
                />
                <DropDown 
                    required={true} 
                    label='Time' 
                    itens={props.teams}
                    value={team}
                    onTyping={value => setTeam(value)} 
                />
                <Button>
                    Criar card
                </Button>
            </form>
        </section>
    )
}

export default Form;