import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LaunchApp from './pages/LaunchApp/LaunchApp';
import Result from './pages/Result/Result';
import TakePhoto from './pages/TakePhoto/TakePhoto';

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LaunchApp />}></Route>
        <Route path="/takephoto" element={<TakePhoto />}></Route>
        <Route path="/result" element={<Result />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
