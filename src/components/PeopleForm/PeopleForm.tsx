import React, {useState} from 'react';
import {PersonType} from '../../types';
interface Props {
  addPerson: (person: PersonType) => void
}
const PeopleForm: React.FC<Props> = ({addPerson}) => {
  const initialState = {
    name: '',
    email: '',
    isActive: false,
    role: 'user'
  };
  const [personMutation, setPersonMutation] = useState(initialState);
  const changePerson = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setPersonMutation((prevState) => {
      return {...prevState, [event.target.name]: event.target.value};
    });
  };
  const changePersonIsActive = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPersonMutation((prevState) => {
      return {...prevState, [event.target.name]: event.target.checked};
    });
  };
  const onsubmitForm = (event: React.FormEvent) => {
    event.preventDefault();
    addPerson(personMutation);
    setPersonMutation(initialState);

  };
  return (
    <form onSubmit={onsubmitForm}>
      <h4 className={'text-primary'}>Add user</h4>
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name={'name'}
          id={'name'}
          className={'form-control'}
          onChange={changePerson}
          value={personMutation.name}
          required
        />
      </div>

      <div className="input-group flex-nowrap mt-3">
        <span className="input-group-text" id="addon-wrapping">@</span>
        <input
          type="email"
          name={'email'}
          id={'email'}
          className="form-control"
          placeholder="Username"
          onChange={changePerson}
          value={personMutation.email}
          required
        />
      </div>

      <fieldset>
        <div>
          <input
            type="checkbox"
            id="isActive"
            name="isActive"
            onChange={changePersonIsActive}
            checked={personMutation.isActive}
          />
          <label htmlFor="isActive">&nbsp;Active</label>
        </div>
      </fieldset>

      <div className="form-floating">
        <select
          className="form-select"
          id="role"
          name={'role'}
          onChange={changePerson}
          required
          aria-label="Floating label select example">
          <option value="user">user</option>
          <option value="admin">admin</option>
          <option value="editor">editor</option>
        </select>
        <label htmlFor="role">Choose role</label>
      </div>

      <button type={'submit'} className={'btn btn-primary mt-2'}>Create</button>
    </form>
  );
};

export default PeopleForm;