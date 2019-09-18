# CBTor
A simple web based application to help Kwara State University freshmen prepare
for the first year computerized based examinations, built by the [Developer Student Clubs, KWASU](https://dsckwasu.club).

The application is built with React (as FE) and Node.js/Express (as BE).

## Getting Started
Installing the application (as a developer) is simple and in these easy steps.
- Clone this repository and navigate inside the cloned directory. If you are a Windows user, we recommend
that you make use of Git bash.
```git
git clone https://github.com/kwasu-ng/cbtor.git && cd cbtor
``` 
- You are done cloning, it's time to install dependency with NPM or Yarn &mdash; your pick. But
we go with NPM here.
```npm
npm install
``` 
- Great. Now, make a duplicate of the **env** file and update its content accordingly. Most times,
this is just fine with no update.
```sh
cp .env.example .env
```
- Start the development server, and start developing.
```npm
npm start
``` 

## Quick Developer Guide
- Frontend developers are to construct their asset compilation in the **webpack.mix.js** file at the root folder. The 
run this command to build the asset (you can find out more about the npm script defined in the package.json)
```npm
npm run asset
```
- Backend developer should just focus on the server implementation only.
-