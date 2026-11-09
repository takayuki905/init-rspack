import { createRoot } from 'react-dom/client';

const App = () => {
  return <h1>Hello, Rspack with TypeScript!</h1>;
};

const container = document.getElementById('root');
if (container) {
  const root = createRoot(container);
  root.render(<App />);
}