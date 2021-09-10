
const BasicInfo = ({technical_information}) => {
  
    return ( 
      <> 
        <hr />
        <h3 id="list-item-4">Technical information</h3>
        <br />
        <div className="row infoBan">
          {
            technical_information.map((item,index) =>
            <div key={index} className="col-lg-3 col-sm-12">
                <br />
                <h5>{item.name}</h5>
                <ul className="list-group">
                  {
                    item.details.map((item2,index2) => 
                    <li  key={index2} className="list-group-item techInfoLi">
                      <p>
                        <strong>{item2.title}: </strong>{item2.content}
                      </p>
                    </li>
                    )
                  }
                </ul>
              </div>
            )
          }
        </div>
      </>
     );
}
 
export default BasicInfo;

