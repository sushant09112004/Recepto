import useUser from './useUser';

function Dashboard() {
  const { user } = useUser(); // Get the current user from the hook

  if (!user) {
    return <p>Please log in to access the dashboard.</p>;
  }

  return (
    <div>
      <h1>Welcome to the {user.role} Dashboard</h1>
      <p>Your name: {user.name}</p>
      <p>Your role: {user.role}</p>
    </div>
  );

}

export default Dashboard;
