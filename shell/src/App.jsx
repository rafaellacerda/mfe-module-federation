import React from "react";

import Header from "header/Header";
import Container from "main/Container";

const App = () => (
  <main className="font-mono bg-gray-900 h-screen">
    <Header />
    <div className="container mx-auto py-6">
      <Container />
    </div>
  </main>
);

export default App;
