import { Route, Routes } from 'react-router-dom';
import './App.css';
import Error from './Component/MultiFrom/Error/Error';
import Step1 from './Component/MultiFrom/Step1/Step1';
import Step2 from './Component/MultiFrom/Step2/Step2';
import Step3 from './Component/MultiFrom/Step3/Step3';
import Step4 from './Component/MultiFrom/Step4/Step4';
import Step5 from './Component/MultiFrom/Step5/Step5';
import Step6 from './Component/MultiFrom/Step6/Step6';
import Step7 from './Component/MultiFrom/Step7/Step7';

function App() {
  return (
    <div className="App">
       <Routes>
        <Route path="/" element={<Step1/>} />
        <Route path="step2" element={<Step2 />} />
        <Route path="step3" element={<Step3 />} />
        <Route path="step4" element={<Step4 />} />
        <Route path="step5" element={<Step5 />} />
        <Route path="step6" element={<Step6 />} />
        <Route path="step7" element={<Step7 />} />
        <Route path="error" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
