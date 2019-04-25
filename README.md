# friendfinder


### Overview of Project
This is a compatibility-based "FriendFinder" application that helps you find your celebrity friend. This full-stack site will take in results from your users' surveys, then compare their answers with those from other users. The app will then display the name and picture of the user with the best overall match.

### Demo 
* Interact with completed app [this demo version of the site](https://radiant-thicket-82786.herokuapp.com/).

### What this project uses
This project uses Nodejs, JavaScript, HTML, CSS, JQuery, Express, JSON, NPM packages and deployed to Heroku.

### How it functions
   * App will display a survey of 10 questions, each with a scale of 1 to 5 based on how much the user agrees or disagrees with a question.
   * The app data will is an array of objects, "friends", with a name, photo link and scores.
   * Determines the user's most compatible friend using the following as a guide:
     * Convert each user's results into a simple array of numbers (ex: `[5, 1, 4, 4, 5, 1, 2, 5, 4, 1]`).
     * Compare the difference between current user's scores against those from other users, question by question. Add up the differences to calculate the `totalDifference`.
       * Example:
         * User 1: `[5, 1, 4, 4, 5, 1, 2, 5, 4, 1]`
         * User 2: `[3, 2, 6, 4, 5, 1, 2, 5, 4, 1]`
         * Total Difference: **2 + 1 + 2 =** **_5_**
     * Uses the absolute value of the differences. Put another way: no negative solutions! Your app should calculate both `5-3` and `3-5` as `2`, and so on.
     * The closest match will be the user with the least amount of difference.

   * Once you've found the current user's most compatible friend, display the result as a modal pop-up.
    * The modal should display both the name and picture of the closest match.

### How to use
To run application in your browser, first set the port environment.
Type in terminal command line: ```node server.js```








