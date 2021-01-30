# GitHubDemoApp
Demo App

# Frameworks and libraries

## Frontend
  1. React  and React-dom 17.0.1
  2. React-Router and React-Router-Dom 5.2.0
  3. Material-ui/core 4.11.2
  4. Material-ui/icons 4.11.2
  5. Material-ui/lab 4.0.0-alpha.57

## Backend
  1. ASP .NET Core 2.2
  2. Newtonsoft Json.NET 12.0.3


# Deployment steps

## Frontend
#### branch:main
  1. Clone repository
  2. Install Heroku for desktop
  3. Open CLI inside repository folder and execute 4. and 5.
  4. `heroku create githubdemoappfrontv1 --buildpack mars/create-react-app`
  5. `git push heroku main:main` or `git push heroku main:master`

*Note: "githubdemoappfrontv1" is the name of the app and it is already taken.*


Frontend link : [https://githubdemoappfrontv1.herokuapp.com/]


## Backend
#### branch:backend
  1. Clone repository
  2. Install Heroku for desktop
  3. Open CLI inside repository folder and execute 4. and 5.
  4. `heroku create gitdemoapiv1 --buildpack https://github.com/jincod/dotnetcore-buildpack`
  5. `git push heroku backend:master`
  
*Note:"gitdemoapiv1" is the name of the app and it is already taken. Name provided here must be specified in .env.*




# Using App

### Route `/` (Home icon):

Search repositories by name. To edit data of repository click on the *Edit* button (under Description). Edited JSON (latest search result including changes) is saved on backend by pressing Submit button.

### Route '/saved' (Save icon)

Preview of saved data.

### Route '/login' (Account icon)
Credentials are provided by filling the form. First field requires GitHub username, and the second field requires Personal Access Token. Personal access token can be created on [https://github.com/]. When on [https://github.com/], go to Account > Settings > Developer Settings > Personal Access Tokens. "User" scope is needed (Update all user data). If provided credentials are valid, user is redirected to `/myaccount`.


### Route '/myaccount' (Account icon)

Preview of user data based on provided credentials.


### Switch theme (Sun icon)
Normal or Dark theme.


*Note: For theme to work in development mode index.js must be edited as suggested in comment.*







