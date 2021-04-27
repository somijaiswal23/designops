import React from "react";
import { Album, StickyFooter } from "./lib";

const App = () => (
  <div>
  <Album Heading="Photo Album" SubContent="Something short and leading about the collection below—its contents, the creator, etc.
          Make it short and sweet, but not too short so folks don&apos;t simply skip over it
          entirely." />
  <StickyFooter/>
</div>
);

export default App;