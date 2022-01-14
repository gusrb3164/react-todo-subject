import React, { useState } from 'react';
import Template from './Template.js';


/**
 * todo interface
 * {
 *   id: string
 *   text: string
 *   completed: boolean
 *   createdAt: string
 * }
 */

function App() {
  
  return (
    <main className="App">
      <Template>
        <h1>Todo Project</h1>
      </Template>
      
      
    </main>
  );
}

export default App;
