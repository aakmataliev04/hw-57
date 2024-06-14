import './App.css';
import Toolbar from '../components/Toolbar/Toolbar';
import People from '../components/People/People';
import {useState} from 'react';
import {PersonType} from '../types';
import PeopleForm from '../components/PeopleForm/PeopleForm';

const App = () => {
  const [people, setPeople] = useState<PersonType[]>([
    {name: 'Atabek', email: 'aakmataliev04@gmail.com', isActive: true, role: 'admin'},
    {name: 'Belek', email: 'belek@gmail.com', isActive: false, role: 'user'},
    {name: 'Ruslan', email: 'ruslan@gmail.com', isActive: true, role: 'editor'},
  ]);
  const addPerson = (person: PersonType) => {
    const duplicate = people.find(one => {
      if (one.email === person.email) {
        return true;
      }
    });

    duplicate === undefined ? setPeople(prevState => {
      return [...prevState, person];
    }) : alert('Пользователь с таким email уже существует');
  };

  return (
    <>
      <header>
        <Toolbar/>
      </header>

      <main className={'container-fluid'}>
        <div className="row mt-2">
          <div className="col-6">
            <PeopleForm addPerson={addPerson}/>
          </div>
          <div className="col-6">
            <People people={people}/>
          </div>
        </div>
      </main>
    </>
  );
};


export default App;

