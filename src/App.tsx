import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import MasonryGalleryComponent from './components/masonryGallery';
import UploadMediaComponent from './components/uploadMediaComponent';

const App: React.FC = () => {

  return (
    <div className="App">
        <main>
            <Switch>
                <Route path="/" component={MasonryGalleryComponent} exact/>
                <Route path="/upload" component={UploadMediaComponent} exact/>
            </Switch>
        </main>
    </div>
  );
}

export default App;
