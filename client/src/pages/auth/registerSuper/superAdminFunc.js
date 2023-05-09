import Axios from "axios";

export const RegisterSuperAdminFunc = (username, password, email) =>
{
    return Axios.post('http://localhost:3001/registerSuperAdmin', {
      username: username,
      password: password,
      email: email,
      userType: 'superadmin',
    });
};