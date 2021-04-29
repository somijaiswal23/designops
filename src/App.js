import React from "react";
import { Album, StickyFooter } from "./lib";
import {CustomModalDemo} from './examples'
import './App.css';

const App = () => (
  <div>
  <Album Heading="Photo Album" SubContent="Something short and leading about the collection below—its contents, the creator, etc.
          Make it short and sweet, but not too short so folks don&apos;t simply skip over it
          entirely." cameraIconClasses="cameraIconClasses"/>
  <CustomModalDemo/>
  <StickyFooter/>
</div>
);

export default App;