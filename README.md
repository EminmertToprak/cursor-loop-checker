# Eminmert Toprak's Challenge Notes

A brief description steps of my path to solve the puzzle

1. I started with try to figure out how to add Bearer Token to the link provided.
2. I decided to use Postman to figure out which METHOD is allowed.
3. After few attempts, I understood POST is the method.
4. Later on, I added cursor to the body, again with Postman to see what's next.
5. When I noticed this is a loop, and aim is to see how it ends, I decided to create a small web application to solve the problem.
6. I created a server script that fetches the next message with the cursor to hide vulnerable information such as berarer token and protect the 3rd party server from too many requests.
7. I used express framework to create it, and request package to make HTTP requests.
8. Following, I craeted a loop checker js component which would check every single cursor until there is no cursor left.
9. Also, I created a very basic HTML file to print it to the browser.
10. I refactored my server.js to the current state.
11. In most basic version, it kept looping until the cursor is empty (or repeating), and print all messages to the browser.
12. I checked the final message to understand I managed to solve puzzle!

## To-Do List

[x] Refactor code if necessary.
[x] Hide API key to env file.
[x] Make UI slightly better and easier to understand.

# Cursor Loop Checker Instructions

This project sets up a simple web server to process cursors using an API. It will continuously send requests with each new cursor until it detects a loop or runs out of cursors.

## Steps to Set Up

### 1. Clone the Repository

Start by cloning the repository to your local machine:

```bash
git clone https://github.com/EminmertToprak/cursor-loop-checker.git
cd cursor-loop-checker
```

### 2. Install Dependencies

Install the necessary Node.js dependencies by running:

```bash
npm install
```

### 4. Create a .env File

In the root of your project directory, create a .env file to store your API URL and token

```bash
API_URL=https://your-api-url
API_TOKEN=Bearer your-api-token
```

By following these steps, you ensure that sensitive information like your API token and URL are not exposed in your public repository, keeping your project secure.

### 5. Start the Server

Run the following command to start the server:

```bash
node server.js
```

### 6. Open the Web Page

Open your browser and navigate to:

```
http://localhost:3000/
```

You should see the "Cursor Loop Checker" header and the output of the cursor processing in the web page.

### Project Structure

- **server.js:** The Express server that proxies API requests.
- **public/:** Contains the static files served by the server.
  - **index.html:** The main HTML file for the client.
  - **loopChecker.js:** The JavaScript file that handles the cursor loop logic.

### Troubleshooting

- **404 Errors:** If you encounter 404 errors, ensure that the public directory is present and contains index.html and loopChecker.js.
- **No Output:** If there is no output on the page, check the browser's console for any errors and ensure the server is running correctly.
