import './bootstrap';

import { createRoot } from 'react-dom/client';
import App from "./Layouts/app";

const root = createRoot(document.getElementById('app'));
root.render(<App />)
