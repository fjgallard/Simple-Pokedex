import { createRoot } from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Form  from './Form'
import List from "./List";
import SelectedTypeContext from "./context/SelectedTypeContext";
import { useState } from "react";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      cacheTime: Infinity,
    },
  },
});

const App = () => {
  const selectedType = useState(null);
  return (
    <SelectedTypeContext.Provider value={selectedType}>
      <QueryClientProvider client={queryClient}>
        <div className="parent">
          <div className="container">
            <h2 className="title">Simple Pokedex</h2>
            <Form />
          </div>

          <List />
        </div>
        
      </QueryClientProvider>
    </SelectedTypeContext.Provider>
    
  )
}

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);