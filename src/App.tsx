import './assets/css/main.css';

import { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { MainRouter } from './routes';

function App() {
  return (
    <Suspense fallback={<>LOADING</>}>
      <BrowserRouter>
        <MainRouter />
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
