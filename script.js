// app.js
import React from 'react';
import { createRoot } from 'react-dom/client';
import CottagecorePortfolio from './CottagecorePortfolio';
import './style.css';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<CottagecorePortfolio />);