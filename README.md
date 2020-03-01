# CBTor

A web based application to help Kwara State University freshmen prepare
for the first year computerized school examinations, built by the [Developer Student Clubs, KWASU](https://dsckwasu.club).

The application is built with React (as FE) and Node.js/Express (as BE).

## Getting Started
Installing the application (as a developer) is simple in the following steps:
- Clone this repository and navigate into the cloned directory. If you are a Windows user, we recommend
that you make use of Git bash.
```git
git clone https://github.com/kwasu-ng/cbtor.git && cd cbtor
``` 
- Once you're done cloning, you can install dependencies with NPM or Yarn &mdash; your pick. But
we go with NPM here.
```npm
npm install
``` 
- Great. Now, make a duplicate of the **env** file and update its content accordingly. Most times,
this is just fine with no update.
```sh
cp .env.example .env
```
- Then, start the development server, and start developing.
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
