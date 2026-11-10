import React from 'react';
import {createRoot} from 'react-dom/client';
import PublicHome from './PublicHome';
import './base.css';
createRoot(document.getElementById('root')!).render(<React.StrictMode><PublicHome workspaceHref="https://reachology.jiaaochen1119.chatgpt.site/workspace"/></React.StrictMode>);
