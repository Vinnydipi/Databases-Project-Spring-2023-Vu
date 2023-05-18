import Axios from 'axios';

// Used to Check the Login info and if correct then redirects 
// to the Event page to show the events 
export const handleLogin = (username, password, setLoginStatus, setIsLoggedIn, navigate) => 
    {
        Axios.post('http://localhost:3001/login', {
        username: username,
        password: password,
        }).then((response) => 
        {
          if (response.data.message)
          {
            setLoginStatus(response.data.message);
          }
          else
          {
            const user = response.data;
            setLoginStatus(user.username);
            setIsLoggedIn(true);

            // Store the current user's username in session storage
            // to access in other files
            sessionStorage.setItem('curUser', user.username);
            sessionStorage.setItem('userEmail', user.email);
            sessionStorage.setItem('id', user.idNum);
            sessionStorage.setItem('userType', user.userType);
            // Getting the universityID
            const domain = user.email.split('@')[1];
            sessionStorage.setItem('universityId', getUniversityId(domain));

            navigate('/mainPage');
            refresh();
          }
        });
    };

// Function to grab the email domain and set to the according number
export const getUniversityId = (domain) =>
{
    if (domain === 'knights.ucf.edu')
        return 1;
    else if (domain === 'ufl.edu')
        return 2;
    else
        return 3;
}

// Refreshing the page
export const refresh = () => window.location.reload(true);