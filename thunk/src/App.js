import './App.css';
import { useSelector,useDispatch } from 'react-redux';
import { getPhotos } from './galleryState';
import { useEffect } from 'react';

function App() {

  const dispatch = useDispatch();
  const photos = useSelector((state) => state.gallery.photos);

  useEffect(() => {
    dispatch(getPhotos());
  },[dispatch])

  console.log(photos);

  return (
    <div className="App">
      <h1>Photo gallery</h1>
      <div>
        {photos.map(photo => 
          <img 
            key={photo.id}
            alt={photo.author}
            src={photo.download_url}
            width="400"
            height="400"
          />
        )}
      </div>
      <button>View more</button>
    </div>
  );
}

export default App;
