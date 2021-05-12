import { Button } from '../components/Button';

import '../styles/sidebar.scss';


interface GenreResponseProps {
  id: number;
  name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
  title: string;
}

interface SiderBarProps {
  genres: GenreResponseProps[];
  handleClickButton: (id:number) => void;
  selectedGenreId: number;
}


export function SideBar({ genres, handleClickButton, selectedGenreId }: SiderBarProps) {
  // Complete aqui
  
  return(


    <div style={{ display: 'flex', flexDirection: 'row'}}>
    <nav className="sidebar">
        <span>Watch<p>Me</p></span>

        <div className="buttons-container">
          {genres.map(genre => (
            <Button
              key={String(genre.id)}
              title={genre.title}
              iconName={genre.name}
              onClick={() => handleClickButton(genre.id)}
              selected={selectedGenreId === genre.id}
            />
          ))}
        </div>

      </nav>
      </div>
  )
}