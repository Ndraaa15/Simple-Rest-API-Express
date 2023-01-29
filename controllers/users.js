import { v4 as uuidv4 } from 'uuid';

let users = [
    // {
    //     firstName : "Indra",
    //     lastName  : "Brata",
    //     age       : 19
    // },
    // {
    //     firstName : "Fian",
    //     lastName  : "Jing",
    //     age       : 20
    // }
];

export const getUsers = (req, res) => {
    res.send(users);
    res.send('Hello');
}

export const createUser = (req, res) => {
    const user = req.body;
    const userId = uuidv4(); // ⇨ '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'
    const userWithId = {...user, id: userId};
    //UserWithId it's mean all the component inside user that newly login has a uniqueId called id
    users.push(userWithId);
    //Rather then push user better push user id.   

    res.send(`User with the name ${user.firstName} added to the database!`);
}

export const getUser = (req, res) => {
    const { id } = req.params;
    const foundUser = users.find((user) => user.id === id );
    res.send(foundUser);
}

export const deleteUser = (req, res) => {
    const { id } = req.params;

    users = users.filter((user) => user.id !== id);
    //if filter return true its keep the user in the array
    //if filter return false its remove it from the array

    res.send(`The user with id ${id} just deleted from the database.`)
}

export const updateUser = (req, res) => {
    const { id } = req.params;
    const {firstName , lastName, age } = req.body
    const userUpdated = users.find((user) => user.id === id);
    if (firstName) userUpdated.firstName = firstName;
    if (lastName) userUpdated.lastName = lastName;
    if (age) userUpdated.age = age;
    
    res.send(`User with id ${id} has been updated`);
}