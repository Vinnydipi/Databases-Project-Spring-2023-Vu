import Axios from "axios";

export const RegisterSuperAdminFunc = (username, password, email, navigate) =>
{    
    return Axios.post('http://localhost:3001/registerSuperAdmin', {
      username: username,
      password: password,
      email: email,
      userType: 'superadmin',
    }).then(() => 
    {
      alert('Successful insert');
      navigate('/');
    }).catch((error) => 
    {
      if (error.response && error.response.status === 400) 
      {
        alert('Bad request: ' + error.response.data);
      } else 
      {
        alert(error.message);
      }
    });
};