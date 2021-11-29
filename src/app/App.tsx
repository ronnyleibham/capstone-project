import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LaunchApp from './pages/LaunchApp/LaunchApp';

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LaunchApp />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
