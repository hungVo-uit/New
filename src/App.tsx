import Alert from "./component/Alert";
import ListGroup from "./component/ListGroup";
import Button from "./component/Button";
import { useState } from "react";

function App() {
  const [alertVisible, setAlertVisiblity] = useState(false);

  return (
    <div>
      {alertVisible && <Alert onClose={()=>setAlertVisiblity(false)}>My Nigga</Alert>}
      <Button onClick={() => setAlertVisiblity(true)}>My button</Button>
    </div>
  );
}

export default App;
