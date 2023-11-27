import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Work } from './pages/Work';
import DocumentUploadPage from './pages/Document/Upload';
import DocumentIndex from './pages/Document/Index';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  // <React.StrictMode>
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/work" element={<Work />} />
        <Route path="/document/upload" element={<DocumentUploadPage />} />
        <Route path="/document/index" element={<DocumentIndex />} />
      </Route>
    </Routes>
  </BrowserRouter>
  // </React.StrictMode>
);

reportWebVitals();
