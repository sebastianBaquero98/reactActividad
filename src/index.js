import * as ReactDOMClient from 'react-dom/client';
import Museums from './components/museum/museum';
import Navbar from './components/navBar/navbar';

const container = document.getElementById('root');
const containerMuseums = document.getElementById('Museums');
const root = ReactDOMClient.createRoot(container);

root.render(<Navbar/>);
//root.render(<Museums/>);