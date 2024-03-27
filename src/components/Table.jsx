const Table = ({sat=[]}) => {
  return (
    <table>
      <thead>
      <tr>
        <th>Name</th>
        <th>Type_Of_Satellites</th>
        <th>Launch Date</th>
        <th>Status</th>
      </tr>
      </thead>
      <tbody>
      {sat.map((satItem, id) => {
        return (
          <tr key={id}>
            <td>{satItem.name}</td>
            <td>{satItem.type_Of_Satellites}</td>
            <td>{satItem.launch_Date}</td>
            <td>{satItem.operational ? 'Active' : 'Inactive'}</td>
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