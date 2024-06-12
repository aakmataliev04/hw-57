import Person from './Person/Person';
import {PersonType} from '../../types';
import React from 'react';

interface Props {
  people: PersonType[]
}

const People: React.FC<Props> = ({people}) => {
  return (
    <>
      <h4 className={'text-primary'}>People</h4>
      {
        people.map((person) => {
          return (
              <Person person={person} key={person.email}/>
          );
        })
      }
    </>
  );
};

export default People;