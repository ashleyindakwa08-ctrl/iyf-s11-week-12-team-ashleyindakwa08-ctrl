import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Auth from './pages/Auth'
import PostList from './components/postList'
import ProtectedRoute from './components/ProtectedRoute'

 
function App() {
  return (
    <Router>
    <div className="App">
      <Routes>
        {/* Default route shows Auth (login/register) */}
        <Route path="/" element={<Auth />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/posts" element={<ProtectedRoute><PostList /></ProtectedRoute>} />
      </Routes>
    </div>
    </Router>
  )
}


export default App;
