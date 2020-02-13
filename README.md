### `npm start`

corre el app en modo dev.<br />
en [http://localhost:3000](http://localhost:3000) lo puedes en el browser.

La pagina tambien va a recargar si haces cambios.<br />

### `npm test`

Corremos los tests de jest.

### `npm run build`

Crea el build final.

para mas informacion, entra A [deployment](https://facebook.github.io/create-react-app/docs/deployment).

### `npm run eject`

**Nota: Una vez se corra `eject`, no hay vuelta atras**

Las configuraciones embebidas en "create-react-app" van externalizarse a tu projecto

## Otros comandos
`create-react-app --template=typescript wines-fe` para crear el proyecto.
`npm install node-sass --save` para guardar sass en el navegador.
`echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf && sudo sysctl -p` para aumentar el numero de watchers.