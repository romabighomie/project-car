import {Route, Routes} from "react-router-dom";
import Layout from "./pages/Layout";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/*<Route index element={< />}/>*/}
          {/*<Route path="/" element={< />}/>*/}
          {/*<Route path="/" element={< />}/>*/}
        </Route>
      </Routes>
    </>
  );
}

export default App;