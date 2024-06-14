
const PeopleForm = () => {

  return (
    <form>
      <h4>Add user</h4>
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name={'name'}
          id={'name'}
          className={'form-control'}
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
          required
        />
      </div>

      <fieldset>
        <div>
          <input
            type="checkbox"
            id="isActive"
            name="isActive"
          />
          <label htmlFor="scales">&nbsp;Active</label>
        </div>
      </fieldset>

      <div className="form-floating">
        <select
          className="form-select"
          id="role"
          name={'role'}
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