# CBTor

A beautiful app built to enable freshmen on campus to simulate the Computer-Based exam offered by the University. CBTor offers wonderful user experience and features that enable students to prepare for exams and experience what it is like to take a Computer-based test. 

The application is built with Node.js and the React Library

<p align="center">
  <a href="https://cbtor.dsckwasu.club">
    <img src="https://img.shields.io/badge/website-cbtor.dsckwasu.club-blue.svg" alt="CBTor web app">
  </a>
</p>

<hr />

## Getting Started
Installing the application (as a developer) is simple in the following steps:
- Fork and Clone this repository 
```git
git clone https://github.com/kwasu-ng/cbtor.git && cd cbtor
``` 
- Navigate into the cloned directory and install dependencies with NPM or Yarn &mdash; your pick. But
we go with NPM here.
```npm
npm install
``` 
- Make a duplicate of the **env** file and update its content accordingly. _Most times, this is just fine with no update.
```sh
cp .env.example .env
```
- Start the development server, _and start developing.
```npm
npm start
``` 

## Quick Developer Guide
- Frontend developers are to construct their asset compilation in the **webpack.mix.js** file at the root folder. Then 
run this command to build the asset (you can find out more about the npm script defined in the package.json)
```npm
npm run asset
```
- Backend developers should just focus on the server implementation only. You can start the server only by running
```sh
npm run server
```
- You can run the server and asset watching together with
```sh
npm start
```

## Contributing.

- Before contributing, ensure you create a branch for a particular feature you'd want to work on, so we wouldn't be having issues of merge conflict 
- You can create a branch this way;
```git 
        git checkout -b [branch-name]
```
- When you're done with your fixes push to that current branch
```git
        git push origin HEAD
```
- The command above pushes your your commits to the current branch you're in.
- Then make your Pull Request.


# Bug fixes.

# General bugs.
- [x] countdown timer reloading.
- [x] Exam statistics is static.
- [x] Credit should be removed on taking exams.
- [x] Error message on login if user doesn't exists.
- [x] Creation of submit button on last question page.
- [x] Edit profile not working
- [x] Feedback submission is inactive.
- [x] Scores section should be utilized.
- [x] Change password not functional.
- [x] Email notification. (registration, empty wallet, change password)
- [x] User inforamtion.
- [ ] Enforce SSL.
- [ ] Forgot password.

# Bugs in desktop mode.
- [ ] No notification button.

# Bugs in mobile veiw.
- [ ] No contact support.

# Features on admin dashboard.
- [ ] Upload questions and courses.
- [ ] Print coupons.
