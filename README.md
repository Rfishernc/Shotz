# Shotz

This is an information website about several amazing upcoming movies.  It was built as an exploration of using jquery to read and edit the DOM, and using promises and ajax to run asynchronous operations.

## Screenshots
![main screen](shotzscreen.PNG)

## How to run this project
* Use npm to install http-server in your terminal:
```sh
npm install -g http-server
```
* Run the server
```sh
hs -p 9999
```
* Open chrome and navigate to:
```
localhost:9999
```
* Use the time of day buttons to filter locations by shoot time.  Typing in the search bar will filter locations to match the search text in either address or name.
* clicking on a movie card will filter locations to only those where the selected movies were filmed.  Select the go back button to return to viewing all movies.