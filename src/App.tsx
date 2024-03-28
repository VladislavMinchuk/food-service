import { useRoutes } from 'react-router-dom';
import { router } from './routes';
import Footer from './blocks/Footer';

function App() {
  const routers = useRoutes(router);

  return (
    <>
      {routers}
      <Footer />
    </>
  )
}

export default App
