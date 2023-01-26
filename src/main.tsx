import ReactDOM from 'react-dom/client'
import App from './App'
import '/dist/output.css'

const rootElem = document.getElementById('root') as HTMLElement
ReactDOM.createRoot(rootElem).render(<App />)
