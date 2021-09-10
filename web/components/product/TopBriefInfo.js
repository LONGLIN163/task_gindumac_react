
const TopBriefInfo = ({productInfo}) => {

    return ( 
      <div className="banner container"> 
        <br />
        <div className="row align-self-center">

          <div className="col-lg-6 col-sm-12 imgContainer">
            <img src={productInfo.thumbnail.thumbnail_url} className="img-fluid center-block" alt="Responsive image"/>
          </div>
          <div className="col-lg-6 col-sm-12">
            <h3>{productInfo.seo_title}</h3>
            <ul className="list-group mb-3">
              <li className="list-group-item d-flex justify-content-between lh-condensed">
                <div>
                  <h6 className="my-0">Price</h6>
                  <small className="text-muted">Brief description</small>
                </div>
                <span className="text-muted">$120,000</span>
              </li>
              <li className="list-group-item d-flex justify-content-between lh-condensed">
                <div>
                  <h6 className="my-0">Availability</h6>
                  <small className="text-muted">Brief description</small>
                </div>
                <span className="text-muted">{productInfo.availability}</span>
              </li>
              <li className="list-group-item d-flex justify-content-between lh-condensed">
                <div>
                  <h6 className="my-0">Production_hours</h6>
                  <small className="text-muted">Brief description</small>
                </div>
                <span className="text-muted">{productInfo.production_hours}hours</span>
              </li>
              <li className="list-group-item d-flex justify-content-between lh-condensed">
                <div>
                  <h6 className="my-0">Product_status</h6>
                  <small className="text-muted">Brief description</small>
                </div>
                <span className="text-muted">{productInfo.product_status.name}</span>
              </li>
              <li className="list-group-item d-flex justify-content-between bg-light">
                <div className="text-success">
                  <h6 className="my-0">Promo code</h6>
                  <small>EXAMPLECODE</small>
                </div>
                <span className="text-success">-$500</span>
              </li>
              <li className="list-group-item d-flex justify-content-between">
                <span>Total (USD)</span>
                <strong>$XXXX</strong>
              </li>
            </ul>
          </div>
        </div>
      </div>
     );
}
 
export default TopBriefInfo;

