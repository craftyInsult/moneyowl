import AddAlert from "@mui/icons-material/AddAlert";
import { Badge, Button } from "@mui/material";
import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Button variant="contained" onClick={() => setCount((pv) => pv + 1)}>
        Richa Sharma
      </Button>
      <Badge badgeContent={count} color="primary">
        <AddAlert fontSize="small" />
      </Badge>
    </div>
  );
}

export default App;
