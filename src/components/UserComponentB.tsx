// src/components/ComponentB.tsx
import UserComponentC from './UserComponentC';

const UserComponentB = () => {
  return (
    <div style={{ border: '1px solid gray', padding: '1rem' }}>
      <h3>User Component B</h3>
      <UserComponentC />
    </div>
  );
};

export default UserComponentB;
