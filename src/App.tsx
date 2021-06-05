import { useState } from 'react';

import SideBar from './components/SideBar';
import Content from './components/Content';

import './styles/global.scss';

const App: React.FC = () => {
  const [selectedGenreId, setSelectedGenreId] = useState(1);

  function handleClickButton(id: number) {
    setSelectedGenreId(id);
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <SideBar
        handleClickButton={handleClickButton}
        selectedGenreId={selectedGenreId}
      />

      <Content selectedGenreId={selectedGenreId} />
    </div>
  )
}

export default App;
