import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom';
import AllQuotes from './pages/AllQuotes';
import NewQuote from './pages/NewQuote';
import QuoteDetail from './pages/QuoteDetail';

const router = createBrowserRouter([
  { path: '/', element: <Navigate to="/quotes" /> },
  { path: '/quotes', element: <AllQuotes /> },
  { path: '/quotes/:quoteId', element: <QuoteDetail /> },
  { path: '/new-quote', element: <NewQuote /> },
]);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
