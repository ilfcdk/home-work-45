// src/components/ComponentA.tsx
import UserComponentB from './UserComponentB';

const UserComponentA = () => {
  return (
    <div style={{ border: '1px solid gray', padding: '1rem' }}>
      <h2>User Component A</h2>
      <UserComponentB />
    </div>
  );
};

export default UserComponentA;
