import './App.css';
import Toolbar from '../components/Toolbar/Toolbar';
import People from '../components/People/People';
import {useState} from 'react';
import {PersonType} from '../types';
import PeopleForm from '../components/PeopleForm/PeopleForm';

const App = () => {
  const [people] = useState<PersonType[]>([
    {name: 'Atabek', email: 'aakmataliev04@gmail.com', isActive: true, role: 'admin'},
    {name: 'Belek', email: 'belek@gmail.com', isActive: false, role: 'user'},
    {name: 'Ruslan', email: 'ruslan@gmail.com', isActive: true, role: 'editor'},
  ]);


  return (
    <>
      <header>
        <Toolbar/>
      </header>

      <main className={'container-fluid'}>
        <div className="row mt-2">
          <div className="col-6">
            <PeopleForm />
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

