import express from "express";


import { getUsers ,createUser, getUser, deleteUser, updateUser } from "../controllers/users.js";

const router = express.Router();

//All routes in here starting with /users so we don't need to put /users in this field because we already put it in index.js
router.get('/users/', getUsers);

router.post('/users/', createUser);

// .../users/12345 => req.params { id : 2}
// '/:id' => ini menjadi parameter pada method dibawah kata kuncinya di :
router.get('/users/:id', getUser);

router.delete('/users/:id', deleteUser);

router.patch('/users/:id', updateUser);

export default router;
//So we can use it in index.js