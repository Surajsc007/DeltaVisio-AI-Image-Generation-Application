import React from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';

import { logo } from './assets';
import { Home, CreatePost } from './page';

const App = () => (
  <BrowserRouter>
    <header className="w-full flex justify-between items-center bg-white sm:px-8 px-4 py-4 border-b border-b-[#e6ebf4]">
    <Link to="/" className="flex items-center max-h-10">
      <img src={logo} alt="logo" className="w-16 mb-2 object-contain" />
      <div className="ml-2"> {/* Adjust the margin as needed */}
        <h1 className="font-extrabold text-[#222328] text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-4xl 2xl:text-3xl 3xl:text-4xl">DeltaVisio AI</h1>
      </div>
    </Link>



      <Link to="/create-post" className="font-inter font-medium bg-[#f97a07] text-white px-4 py-2 rounded-md">Create</Link>
    </header>
    <main className="sm:p-8 px-4 py-8 w-full bg-[#f9fafe] min-h-[calc(100vh-73px)]">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create-post" element={<CreatePost />} />
      </Routes>
    </main>
  </BrowserRouter>
);

export default App;
