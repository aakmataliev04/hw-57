import {PersonType} from '../../../types';
import React from 'react';

interface Props {
  person: PersonType,
}
const Person: React.FC<Props> = ({person}) => {

  return (
    <div className="person bg-primary">
      <h4 className={'mb-0'}>{person.name}</h4>
      <p className={'mb-0'}> - {person.email}</p>
      <p className={'mb-0'}>{person.isActive ? '(online) ': '(offline) '}</p>
      <p className={'mb-0'}>: {person.role}</p>
    </div>
  );
};

export default Person;