
const BasicInfo = ({productInfo}) => {

    return ( 
      <> 
        <hr />
        <h3 id="list-item-3">Basic information</h3>
        <br />
        <table className="table table-bordered">
        <tbody>
            <tr>
            <td>Brand</td>
            <td>{productInfo.brand.name}</td>
            <td>Application_types</td>
            <td>{productInfo.application_types[0].name}</td>
            </tr>
            <tr>
            <td>Origin</td>
            <td>{productInfo.country}</td>
            <td>Machine_types</td>
            <td>{productInfo.machine_types[0].name}</td>
            </tr>
            <tr>
            <td>Built_on</td>
            <td>{productInfo.built_on}</td>
            <td>Model</td>
            <td>{productInfo.model}</td>
            </tr>
        </tbody>
        </table>
      </>
     );
}
 
export default BasicInfo;

