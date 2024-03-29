// Function to logout of the Web App -->
// Clearing the cookies and returning to the login/Register Page

// Import Axios
import Axios from 'axios';

export async function logout()
{
    try
    {
        // Makes a post request to the http link
        // The "{ withcredential: true }" is passed to include any cookies currently in the browser
        const response = await Axios.get('http://localhost:3001/logout', { withCredentials: true });
        
        if (response.status === 200)
        {
            // Clears the cookies
            sessionStorage.clear();
            // Returns the now logged out user to the login/register page
            window.location.href = '/';
        }
    }
    catch (error) 
    {
        // Print to the console what type of error we get
        console.log(error);
    }
}