import { useEffect, useState } from "react";
import { getAllUsers } from "../Managers/UserProfileManager.jsx";
import { Button, Container, List, ListGroup, ListGroupItem } from "reactstrap";

import { useNavigate } from "react-router-dom";

export const UserList = () => {
    const [users, setUsers] = useState([]);

    const getUsers = () => {
        getAllUsers().then(usersObj => setUsers(usersObj));
    };

    useEffect(() => {
        getUsers();
    }, []);

    const navigate = useNavigate();

    return (
        <Container>
            <List>
                <ListGroup>
                    <ListGroupItem header="All Users" /> {/* Set header to a string */}
                    {users.map((user) => (
                        <ListGroupItem key={user.id} className="d-flex justify-content-between align-items-center">
                            <div>
                                <strong>Display Name:</strong> {user.displayName}<br />
                                <strong>Full Name:</strong> {user.fullName}<br />
                                <strong>User Type:</strong> {user.userType.name}
                            </div>
                            <div>
                                <Button
                                    color="success"
                                    onClick={() => navigate(`/users/editType/${user.id}`)}
                                    className="ml-2"
                                >
                                    Edit
                                </Button>
                                <Button
                                    onClick={() => navigate(`/users/${user.id}`)}
                                    className="ml-2"
                                >
                                    View Details
                                </Button>
                            </div>
                        </ListGroupItem>
                    ))}
                </ListGroup>
            </List>
        </Container>
    );
};
