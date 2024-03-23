import Banner from "./components/Banner";
import Buttons from "./components/Buttons";
import Table from "./components/Table";
import {useState} from "react";
import satData from "./components/satData";

function App() {
  const [sat, setSat] = useState(satData);
  const displaySats = [...new Set(satData.map((satData) => satData.orbitType))];
  const filterByType = (currentType) => {
    console.log(`Filtering by ${currentType}`);
    const filteredSats= satData.filter((newSatData) => {
      const isMatch = newSatData.orbitType === currentType;
      console.log(`Checking satData item ${newSatData.orbitType}, isMatch: ${isMatch}`);
      return isMatch;
    });
    console.log(`Filtered sats: ${JSON.stringify(filteredSats)}`);
    setSat(filteredSats);
  }
 
return (
    <div>
      <Banner />
      <Table sat={sat}
      />
      <Buttons 
      filterByType={filterByType}
      setSat={setSat}
      displaySats={displaySats}
      />
      
    </div>
  );
}

export default App;