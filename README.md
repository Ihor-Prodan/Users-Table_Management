### User Management Table

## [DEMO](https://ihor-prodan.github.io/Users-Table_Management/)

**Approach:**  
To complete this task, I created an interactive list of users that allows filtering data by criteria such as name, email, phone number, and username.

I used **TypeScript** and **React** to develop the interface, which provided strong typing and reduced the number of errors during compilation. **Tailwind CSS** allowed for the quick and efficient creation of an attractive design.

**Redux Toolkit** was the main tool for managing the state of the application. Using Redux Toolkit simplified working with Redux by providing a more convenient API for creating reducers and actions, making it easier to implement filtering, pagination, and other aspects of state management.

For fetching data, I used **Redux Thunk**, which is a middleware for handling asynchronous requests in Redux. Thunk allowed me to create asynchronous actions that perform API requests to fetch user data. This made it possible to manage asynchronous operations in a centralized way, store fetched data in the Redux Store, and ensure its availability to all components of the application.

**Redux Persist** was used to save the state of the application between page reloads. This ensures that even after reloading the page, the user stays on the same page with the same filters applied as before.

The main components include:

- **Filtering:** A dynamic filter for searching users by different criteria. Filtering was implemented using Redux Toolkit, making it easy to manage the filter state and ensure interaction with other parts of the application.

- **Pagination:** A mechanism for splitting a large number of users into convenient pages, simplifying navigation. Pagination is managed through Redux, and the current page is saved using Redux Persist, so the user can continue browsing from the same place even after reloading the page.

- **Select number of users:** A select dropdown for choosing the number of users displayed on a single page. Using TypeScript allowed for clear definition of the possible options for the dropdown, reducing the chances of passing incorrect data.

- **Animation:** Using animations for smooth transitions when changing filters and pagination, improving the user experience.

**Challenges:**

1. **Integration of filters and pagination:** Ensuring correct interaction between filtering and pagination required careful logic checking so that the filtering results were displayed correctly on the pages. Using Redux Toolkit helped structure this logic and make it more predictable and manageable.

2. **Fetching data:** Asynchronous API requests and data handling required special attention to ensure the application's stable performance. With Redux Thunk, I managed to effectively handle asynchronous operations and synchronize them with other application functionalities.

3. **State persistence:** Thanks to Redux Persist, I was able to save the state of pagination and filters between page reloads. This was important because users could lose the current state without this functionality.

4. **Animations:** Integrating animations with filtering and pagination functionality required synchronization to ensure smooth transitions and avoid delays or incorrect displays.

This approach allowed for the creation of an effective and user-friendly interface for viewing and filtering a large number of users, improving the overall user experience with the application. Using **TypeScript**, **Redux Toolkit**, **Redux Thunk**, and **Redux Persist** ensured code reliability and maintainability, reduced the number of errors, and made the development process more predictable. 
