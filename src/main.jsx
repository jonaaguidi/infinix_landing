import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Landing_EN from './routes/Landing_EN.jsx';
import Landing_ES from './routes/Landing_ES.jsx';
import Landing_BR from './routes/Landing_BR.jsx';
import Error from './components/components_EN/ErrorComponent/Error.jsx';
import '../src/styles/index.css';

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Landing_EN />} />
      <Route path="/es" element={<Landing_ES />} />
      <Route path="/br" element={<Landing_BR />} />
      <Route path="*" element={<Error />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);
