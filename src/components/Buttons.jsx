import satData from './satData'

const Buttons = ({ filterByType, setSat, displaySats }) => {
  return (
    <div>
      {displaySats.map((sat, id) => {
      return (
      <button onClick={() => {
        console.log(`Button clicked: ${sat} Orbit`);
      filterByType(sat);
      }} key={id}>
      {sat} Orbit
      </button>
      );
    })}
      <button onClick={() => {
        console.log('Button clicked: All Orbits');
        setSat(satData);
      }}>
        All Orbits
       </button>
    </div>
 );
};

export default Buttons;