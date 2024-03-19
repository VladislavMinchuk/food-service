import { useRoutes } from 'react-router-dom';
import { router } from './routes';

function App() {
  const routers = useRoutes(router);

  return (
    <>
      {routers}
      <footer>
        <a href="https://zakon.rada.gov.ua/laws/show/426-2002-%D0%BF#n23" target='_blank'>
          Норма №1 харчування військовослужбовців Збройних Сил та інших військових формувань
        </a>
      </footer>
    </>
  )
}

export default App
