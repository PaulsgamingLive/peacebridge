import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { add3DTiltEffect } from './utils/add3DTiltEffect'

// Initialize app
const root = createRoot(document.getElementById("root")!);
root.render(<App />);

// Initialize 3D effects after the app has rendered
setTimeout(() => {
  add3DTiltEffect('.card-3d', { 
    maxTilt: 10,
    glare: true,
    maxGlare: 0.3
  });
  
  add3DTiltEffect('.button-3d', { 
    maxTilt: 5,
    scale: 1.03
  });
  
  // Add class to body to enable 3D perspective globally
  document.body.classList.add('perspective-container');
}, 500);
