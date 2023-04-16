import { useState } from 'react';


function PersonalInfo() {
  const [password, setPassword] = useState('');
const [newPassword, setNewPassword] = useState('');
const [confirmPassword, setConfirmPassword] = useState('');

const handleSubmit = (event) => {
  event.preventDefault();
};

  return (
    <div className="PersonalInfo">
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Password:
            <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
          </label>
        </div>
        <div>
          <label>
            New password:
            <input type="password" value={newPassword} onChange={e => setNewPassword(e.target.value)} />
          </label>
        </div>
        <div>
          <label>
            Confirm password:
            <input type="password" value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} />
          </label>
        </div>
        <button type="submit">Change password</button>
      </form>
    </div>
  );
}

export default PersonalInfo;
