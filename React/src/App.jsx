import { useContext } from 'react';
import { themeDetail } from './ContextThemeProvider.jsx';
import Todo from './components/25_06/Todo.jsx';

const App = () => {
  const data = useContext(themeDetail);
  const { name } = data;

  console.log(data);

  return (
    <div>
      <h1>Theme: {data.theme}</h1>
      <p>Name: {name}</p>

      <Todo />
    </div>
  );
};

export default App;
