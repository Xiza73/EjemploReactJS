# EjemploReactJS
Material del Curso de React JS

npm run start

npm install -g create-react-app ya fue sustituido por npx. Asi que lo que tiene que hacer es lo siguiente. En caso de haber instalado previamente create-react-app se debe desinstalar:
npm uninstall -g create-react-app.
Y luego usar el comando 
npx create-react-app hello-react
En caso de no tener instalado npx. Sencillamente instalarlo con:
npm install -g npx

Para los amigos que están utilizando Visual Studio Code y desean autocompletar código JSX vayan a File - Preferences - Settings y busquen el archivo settings.json y agreguen lo siguiente:
"emmet.includeLanguages": {
    "javascript": "javascriptreact"
  },
  "emmet.triggerExpansionOnTab": true

