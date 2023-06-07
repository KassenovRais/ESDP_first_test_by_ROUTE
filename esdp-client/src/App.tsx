import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './Components/Layout/Layout'
import { useAppSelector } from './Store/hooks';
import { RootState } from './Store/store';
import './App.css';
import ProtectedRoute from './Components/ProtectedRoute/ProtectedRoute';
import Register from './Containers/Anonymous.containers/Register/Register';
import Login from './Containers/Anonymous.containers/Login/Login';
import Shop from './Containers/Shop/Shop';
import InteractiveTutorials from './Components/InteractiveTutorials/InteractiveTutorials';
import CreateInteractiveTutorials from './Containers/InteractiveTutorials/CreateInteractiveTutorials/CreateInteractiveTutorials';
import ExampleInteractiveTutorials from './Containers/InteractiveTutorials/ExampleInteractiveTutorials/ExampleInteractiveTutorials';
import GeneratorTutorials from './Components/GeneratorTutorials/GeneratorTutorials';
import Matematics from './Containers/GeneratorTutorials/Mathematics/Mathematics';
import Letter from './Containers/GeneratorTutorials/Letter/Letter';
import Reading from './Containers/GeneratorTutorials/Reading/Reading';
function App() {

  const user = useAppSelector<RootState>(state => state.auth)

  return (
    <>
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout/>} >
            <Route index element={<h2>Main Page</h2>} />
            <Route path='/interactiveTutorials' element={<InteractiveTutorials/>}>
              <Route path='/interactiveTutorials/createInteractiveTutorials' element={<CreateInteractiveTutorials/>} />
              <Route index  element={<ExampleInteractiveTutorials/>} />
            </Route>
            <Route path='/generator' element={<GeneratorTutorials/>} >
              <Route path='/generator/mathematics' element={<Matematics/>} />
              <Route index element={<Letter/>} />
              <Route path='/generator/reading' element={<Reading/>} />
            </Route>
            
            <Route path='/register' element={(
              <ProtectedRoute isAllowed={!user.user} redirectPath='/' >
                <Register/>
              </ProtectedRoute>
            )} />
            <Route path='/login' element={(
              <ProtectedRoute isAllowed={!user.user} redirectPath='/' >
                <Login/>
              </ProtectedRoute>
            )} />
            <Route path='/shop' element={(
              <ProtectedRoute isAllowed={!user.user} redirectPath='/' >
                <Shop/>
              </ProtectedRoute>
            )} />
            
              
            
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
