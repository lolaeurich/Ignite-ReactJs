import React from 'react' //é o pacote responsável pelo core do React, as funcionalidades básicas.
import ReactDOM from 'react-dom/client' //integração do core do React com o DOM (Document Object Model), a representação do nosso html através do javascript
import { App } from "./App"


//o elemento raiz da nossa html é o root
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
