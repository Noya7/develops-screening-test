In order to setup this project correctly, you must first install the required dependencies for both the back-end and the front-end. To do this, navigate to each folder and run npm install.

Once you have installed the dependencies, you can optionally setup the .env files for each end.
Since I have included both files in the repository, this is optional, in case you need to change the port on which the backend runs.

Important: if you change the backend port on the .env file inside the backend folder, you have to also change the port on the frontend .env file.

After setting everything up, you can proceed to open both folders in separate terminals, and run:
npm start in the backend folder
npm run dev in the frontend

For the backend, you can alternatively start it with the npm run dev command too. This will run the code with nodemon, wich auto-restarts the server everytime you save a file.

after both apps are running, you can open the vite app in your browser by navigating to:
http://localhost:5173
