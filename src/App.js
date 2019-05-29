import React, { useEffect, useState } from "react";
import ApolloClient from "apollo-boost";
import gql from "graphql-tag";
import { ApolloProvider } from "react-apollo";
import "./App.css";

const client = new ApolloClient({ uri: `https://jackborg.dk/graphql/` });

function App() {
	const [users, setUsers] = useState([]);
	let [meWant, setMeWant] = useState(["_id", "username", "email"]);
	const [newUser, setNewUser] = useState({
		username: "",
		firstName: "",
		lastName: "",
		email: "",
		password: ""
	});

	function getAllUsers() {
		const ALL_USERS = gql`
        {
            getAllUsers {
                ${meWant.join(" ")}
            }
        }
        `;

		client
			.query({
				query: ALL_USERS,
				fetchPolicy: "no-cache"
			})
			.then((result) => setUsers(result.data.getAllUsers));
	}

	const handleCheck = (evt) => {
		const value = evt.target.value;
		if (evt.target.checked) {
			meWant.push(value);
		} else {
			meWant = meWant.filter((el) => el !== value);
		}
		setMeWant(meWant);
		getAllUsers();
	};

	const updateNewUser = (evt) => {
		const name = evt.target.name;
		const value = evt.target.value;

		newUser[name] = value;
		setNewUser({ ...newUser });
	};

	const submitNewUser = (evt) => {
		evt.preventDefault();
		const createUser = gql`
			mutation($user: UserInput!) {
				createUser(input: $user){
                    ${meWant.join(" ")}
                }
			}
		`;
		client.mutate({ mutation: createUser, variables: { user: newUser } }).then((result) => {
			let u = result.data.createUser;
			users.push(u);
			setUsers([...users]);
		});
	};

	const resetUsers = (evt) => {
		evt.preventDefault();
		const resetU = gql`
			mutation {
				resetUsers
			}
		`;
		client.mutate({ mutation: resetU }).then(getAllUsers());
	};

	useEffect(() => getAllUsers());

	return (
		<div className="App">
			<ApolloProvider client={client}>
				<UserTable users={users} />
			</ApolloProvider>
			<hr />
			<button className="btn btn-danger" onClick={resetUsers}>
				Reset users
			</button>
			<hr />
			<CheckBoxes handleCheck={handleCheck} />
			<hr />
			<NewUserForm
				newUser={newUser}
				updateNewUser={updateNewUser}
				submitNewUser={submitNewUser}
			/>
		</div>
	);
}

function NewUserForm({ newUser, updateNewUser, submitNewUser }) {
	return (
		<form className="row" onSubmit={submitNewUser}>
			<div className="col-sm-6">
				<div className="form-group">
					<label>Username</label>
					<input
						type="text"
						className="form-control"
						placeholder="Enter username"
						name="username"
						value={newUser.userName}
						onChange={updateNewUser}
						required
					/>
				</div>
			</div>
			<div className="col-sm-6">
				<div className="form-group">
					<label>Email address</label>
					<input
						type="email"
						className="form-control"
						placeholder="Enter email"
						name="email"
						value={newUser.email}
						onChange={updateNewUser}
						required
					/>
				</div>
			</div>

			<div className="col-sm-6">
				<div className="form-group">
					<label>Firstname</label>
					<input
						type="text"
						className="form-control"
						placeholder="Enter firstname"
						name="firstName"
						value={newUser.firstName}
						onChange={updateNewUser}
						required
					/>
				</div>
			</div>

			<div className="col-sm-6">
				<div className="form-group">
					<label>Lastname</label>
					<input
						type="test"
						className="form-control"
						placeholder="Enter lastname"
						name="lastName"
						value={newUser.lastName}
						onChange={updateNewUser}
						required
					/>
				</div>
			</div>

			<div className="col-sm-6">
				<div className="form-group">
					<label>Password</label>
					<input
						type="password"
						className="form-control"
						placeholder="Password"
						name="password"
						value={newUser.password}
						onChange={updateNewUser}
						required
					/>
				</div>
			</div>

			<div className="col-sm-12">
				<div className="form-group">
					<br />
					<button type="submit" className="btn btn-primary">
						Submit
					</button>
				</div>
			</div>
		</form>
	);
}

function UserTable({ users }) {
	if (users.length === 0) return <p>no data yet</p>;
	const keys = Object.keys(users[0]).slice(0, -1);

	return (
		<table className="table">
			<thead>
				<tr>
					{keys.map((key) => (
						<th key={key}>{key}</th>
					))}
				</tr>
			</thead>
			<tbody>
				{users.map((user) => (
					<tr key={user.username}>
						{Object.keys(user)
							.slice(0, -1)
							.map((key) => (
								<td key={key}>{user[key]}</td>
							))}
					</tr>
				))}
			</tbody>
		</table>
	);
}

function CheckBoxes({ handleCheck }) {
	return (
		<div>
			<label>
				username
				<input type="checkbox" value="username" onChange={handleCheck} defaultChecked />
			</label>
			<br />
			<label>
				firstName
				<input type="checkbox" value="firstName" onChange={handleCheck} />
			</label>
			<br />
			<label>
				lastName
				<input type="checkbox" value="lastName" onChange={handleCheck} />
			</label>
			<br />
			<label>
				email
				<input type="checkbox" value="email" onChange={handleCheck} defaultChecked />
			</label>
		</div>
	);
}

export default App;
