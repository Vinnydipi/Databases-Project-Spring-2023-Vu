import Axios from "axios";

export const studentRegister = (username, password, email) =>
{
    return Axios.post('http://localhost:3001/registerStudent', {
        username: username,
        password: password,
        email: email,
        userType: 'student',
    });
};