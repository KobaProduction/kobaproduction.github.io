import React from "https://cdn.skypack.dev/react";
import {render} from "https://cdn.skypack.dev/react-dom";

function App() {
    return <div>
        <h1>Hello World</h1>
        <p>I'm hosted with GitHub Pages.</p>
    </div>;
}

render(<App/>, document.getElementById('root'));
