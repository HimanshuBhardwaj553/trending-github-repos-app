import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import TrendingRepos from './components/TrendingRepos';
import Settings from './components/Settings';

function App() {
  const [activeTab, setActiveTab] = useState('trending');

  return (
    <div className="app">
      <Header />
      <main className="main-content">
        {activeTab === 'trending' && <TrendingRepos />}
        {activeTab === 'settings' && <Settings />}
      </main>
      <nav className="bottom-nav">
        <button 
          className={`nav-tab ${activeTab === 'trending' ? 'active' : ''}`}
          onClick={() => setActiveTab('trending')}
        >
          <span className="nav-icon">⭐</span>
          <span className="nav-text">Trending</span>
        </button>
        <button 
          className={`nav-tab ${activeTab === 'settings' ? 'active' : ''}`}
          onClick={() => setActiveTab('settings')}
        >
          <span className="nav-icon">⚙️</span>
          <span className="nav-text">Settings</span>
        </button>
      </nav>
    </div>
  );
}

export default App;