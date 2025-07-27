// src/components/UserComponentC.tsx
import { useState } from 'react';
import { useAppSelector, useAppDispatch } from '../redux/hooks';
import { addUser, removeUser } from '../redux/slices/userSlice';

const UserComponentC = () => {
  const users = useAppSelector(state => state.user.users);
  const dispatch = useAppDispatch();
  const [name, setName] = useState('');

  const handleAdd = () => {
    if (name.trim()) {
      dispatch(addUser({ id: Date.now(), name }));
      setName('');
    }
  };

  return (
    <div style={{ border: '1px solid gray', padding: '1rem' }}>
      <h4>User Component C (доступ до Redux)</h4>

      <ul>
        {users.map(user => (
          <li key={user.id} style={{ marginBottom: '0.5rem' }}>
            {user.name}
            <button
              onClick={() => dispatch(removeUser(user.id))}
              style={{ marginLeft: '1rem', color: 'red' }}
            >
              Видалити
            </button>
          </li>
        ))}
      </ul>

      <input
        type="text"
        placeholder="Введіть ім’я"
        value={name}
        onChange={e => setName(e.target.value)}
        style={{ marginRight: '1rem' }}
      />

      <button onClick={handleAdd}>Додати користувача</button>
    </div>
  );
};

export default UserComponentC;
