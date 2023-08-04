import {BrowserRouter, Routes, Route} from "react-router-dom";
import {MainLayout} from "./Layouts/MainLayout";
import {Books} from "./Books/Books";
import {Music} from "./Music/Music";
import {Youtube} from "./YouTube/Youtube";
import {Films} from "./Films/Films";
import './App.css';

function App() {

    const listItems1 = document.querySelectorAll('#categories1 li');

    listItems1.forEach(item => {
        item.addEventListener('click', () => {
            listItems1.forEach(li => li.classList.remove('active'));
            item.classList.add('active');
        });
    });

  return (
      <BrowserRouter>
        <div className="App">
          <Routes>
            <Route path="/" element={<MainLayout/>}>
              <Route index element={<Books/>}/>
              <Route path="music" element={<Music/>}/>
              <Route path="youtube" element={<Youtube/>}/>
                <Route path="films" element={<Films/>}></Route>
            </Route>
          </Routes>
        </div>
      </BrowserRouter>
  );
}

export default App;
