const Table = ({sat=[]}) => {
  return (
    <table>
      <thead>
      <tr>
        <th>Name</th>
        <th>Type_Of_Satellites</th>
        <th>Launch_Date</th>
        <th>Status</th>
      </tr>
      </thead>
      <tbody>
      {sat.map((satItem, id) => {
        return (
          <tr key={id}>
            <td>{satItem.name}</td>
            <td>{satItem.type}</td>
            <td>{satItem.launchDate}</td>
            <td>{satItem.orbitType ? 'Active' : 'Inactive'}</td>
          </tr>
        );
      })}
     <tr>
     <td>test-probe</td>
      <td>test-type</td>
      <td>test-date-2222-22-22</td>
      <td>test 1</td>
     </tr>
     </tbody>
   </table>
  );
};
export default Table;