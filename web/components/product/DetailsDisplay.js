
const DetailsDisplay = ({images}) => {

    return ( 
      <> 
        <hr />
        <h3 id="list-item-5">Details display</h3>
        <br />
        <div className="row row-cols-1 row-cols-md-2 g-4">
          {
            images.map((item,index) =>
              <div key={index} className="col" >
                <div className="card">
                  <img src={item.image_url} className="card-img-top" alt="..."/>
                  <div className="card-body">
                    <h5 className="card-title">{item.title}</h5>
                  </div>
                </div>
              </div>
            )
          }
        </div>
      </>
     );
}
 
export default DetailsDisplay;

