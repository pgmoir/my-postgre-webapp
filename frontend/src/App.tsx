import { useEffect, useState } from 'react';
import type { User } from './models/User';

function App() {
	const [users, setUsers] = useState<User[] | null>();

	useEffect(() => {
		fetch('http://localhost:5001/')
			.then((res) => res.json())
			.then((data) => setUsers(data.data))
			.catch((err) => console.error('API error:', err));
	}, []);

	return (
		<div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
			<h1>React Frontend</h1>
			<div>
				Users:
				<br />
				{users && (
					<ul>
						{users.map((u) => (
							<li key={u.id}>
								{u.name} - {u.email} - {u.address}
							</li>
						))}
					</ul>
				)}
				{!users && 'Loading... (check backend connection)'}
			</div>
		</div>
	);
}

export default App;
