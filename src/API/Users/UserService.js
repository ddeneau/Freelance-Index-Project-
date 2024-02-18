import axios from "axios";

const apiUrl = ""

axios.get(`${apiUrl}/users`)
  .then(response => {
    // Example handling of successful response:
    console.log(response.data); // Log the received user data

    // Use the user data as needed in your application,
    // e.g., display it in a list or create user profiles.
  })
  .catch(error => {
    // Example handling of API call error:
    console.error(error); // Log the error for debugging

    // Display an error message to the user,
    // e.g., using an alert or notification.
  });

  export const createUser = async (userData) => {
    try {
      const response = await axios.post(`${apiUrl}/users`, userData);
      return response.data; // Return created user data
    } catch (error) {
      throw new Error('Failed to create user:', error);
    }
  };