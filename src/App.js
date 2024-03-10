import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { Layout, Typography, Space } from 'antd';

import { Navbar, Exchanges, Homepage, Cryptocurrencies, News, CryptoDetails } from './components';
import './App.css';
// import 'antd/dist/reset.css';

const App = () => {
  return (
    <div className="app">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="main">
        <Layout>
          <div className="route">
            <Routes>
              <Route path='/' Component={Homepage}>
              </Route>
              <Route path='/exchanges' Component={Exchanges}>
              </Route>
              <Route path='/cryptocurrencies' Component={Cryptocurrencies}>
              </Route>
              <Route path='/crypto/:coinId' Component={CryptoDetails}>
              </Route>
              <Route path='/news' Component={News}>
              </Route>
            </Routes>
          </div>
        </Layout>
        <div className="footer">
          <Typography.Title level={5} style={{ color: 'white', textAlign: 'center' }}>
            Cryptodash <br />
            All rights reserved
          </Typography.Title>
          <Space>
            <Link to="/">Home</Link>
            <Link to="/exchanges">Exchanges</Link>
            <Link to="/news">News</Link>
          </Space>
        </div>
      </div>
    </div>
  )
}

export default App