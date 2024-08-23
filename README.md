# Eminmert Toprak's Challenge Notes

A brief description steps of my path to solve the puzzle

1. I started with try to figure out how to add Bearer Token to the link provided.
2. I decided to use Postman to figure out which METHOD is allowed.
3. After few attempts, I understood POST is the method.
4. Later on, I added cursor to the body, again with Postman to see what's next.
5. When I noticed this is a loop, and aim is to see how it ends, I decided to create a small web application to solve the problem.
6. I created a server script that forwards requests to the target site with the bearer token.
7. I used express framework to create it, and request package to make HTTP requests.
8. Following, I craeted a loop checker js component which would check every single cursor until there is no cursor left.
9. Also, I created a very basic HTML file to print it to the browser.
10. I had an Error because of the CORS. It prevented me to make request from different domain.
11. I decided to set up a local server to serve my HTML file, so that it can bypass CORS restrictions.
12. I updated my server.js to the current state.
13. In most basic version, it kept looping until the cursor is empty, and print all messages to the browser.
14. I checked the final message to understand I managed to solve puzzle!

## To-Do List

[] Refactor code if necessary.
[] Hide API key to env file.
[] Make UI slightly better and easier to understand.

# Cursor Loop Checker Instructions

This project sets up a simple web server and client to process cursors using an API. It will continuously send requests with each new cursor until it detects a loop or runs out of cursors.

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

### 3. Start the Server

Run the following command to start the server:

```bash
node server.js
```

### 4. Open the Web Page

Open your browser and navigate to:

```arduino
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
