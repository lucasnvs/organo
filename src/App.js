import { useState } from 'react';
import Banner from './components/Banner';
import Footer from './components/Footer';
import Form from './components/Form';
import Team from './components/Team';

function App() {

  const teams = [
    { name: 'Programação', primaryColor: '#57C278', secondaryColor: '#D9F7E9' },
    { name: 'Front-End', primaryColor: '#82CFFA', secondaryColor: '#E8F8FF' },
    { name: 'Data Science', primaryColor: '#A6D157', secondaryColor: '#F0F8E2' },
    { name: 'Devops', primaryColor: '#E06B69', secondaryColor: '#FDE7E8' },
    { name: 'UX e Design', primaryColor: '#DB6E8F', secondaryColor: '#FAE9F5' },
    { name: 'Mobile', primaryColor: '#FFBA05', secondaryColor: '#FFF5D9' },
    { name: 'Inovação e Gestão', primaryColor: '#FF8A29', secondaryColor: '#FFEEDF' }
  ]

  const [employeds, setEmployeds] = useState([]);

  const onNewEmployedAdd = (employed) => {
    console.log(employed)
    setEmployeds([...employeds, employed]);
  }

  return (
    <div className="App">
      <Banner />
      <Form teams={teams.map( team => team.name )} onEmployedRegistered={employed => onNewEmployedAdd(employed)} />

      {teams.map(team => <Team 
        key={team.name} 
        name={team.name} 
        primaryColor={team.primaryColor} 
        secondaryColor={team.secondaryColor}
        employeds={employeds.filter( employed  => employed.team === team.name)}
      />)}

      <Footer />
    </div>
  );
}

export default App;
