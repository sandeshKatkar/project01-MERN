# this is Mern Stack Project

* Project setup

create one folder 
install node/create package.json    :npm init
create one readme file
connect with git
create gitignore file from  internet
create .env file which stores environment variables
create folder public and inside public create temp
create folder src and create files inside it (index.js,app.js,constants.js)
cerate folders in src => controllers, DB, middlewares, models, routes, utils 
edit package.json
    add "type":"module"   // for module js
    change scripts => "dev":"nodemon src/index.js"
install nodemode => it restarts server automatically => install its dev dependancy =>  npm install -D nodemon 

addition:
use prettier => it used for code formatter e.g. how many spaces in tab e.g. 2 or 4 / double cotes alloweed or not => install: npm i -D prettier => settings: add files 
.prettierrc = {
    "singleQuote":false,
    "bracketSpacing":true,
    "tabWidth":4,
    "trailComma":"es5"
}
.prittierignore  => add those files in  which does not allow to make any changes
                =>  /.vscode 
                    /node_modules
                    ./dist

                    *.env
                    .env
                    .env.*

                    npm install mongodb


* Database Connection 

create account and data baseon atlas cloud base database => 
add env_variables in .env file => port & connection url of db
add databse name in constants file

package install : npm i  mongoose express dotenv

connection code: index.js   or  make file in db and import it in index.js
