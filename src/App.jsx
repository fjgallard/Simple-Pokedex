import { createRoot } from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Form  from './Form'
import List from "./List";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      cacheTime: Infinity,
    },
  },
});

const App = () => {

  return (
    <QueryClientProvider client={queryClient}>
      <div className="parent">
        <div className="container">
          <h2 className="title">Simple Pokedex</h2>
          <Form />
        </div>

        <List />
      </div>
      
    </QueryClientProvider>
  )
}

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);