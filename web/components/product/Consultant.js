
const Consultant = () => {

    return ( 
      <> 
        <br />
        <h3 id="list-item-1">Product Consultant</h3>
        <br />
        <div className="row consultant">
            <div className="col-lg-2 col-sm-12">
                <img className="rounded-circle border" src="https://s3.eu-central-1.amazonaws.com/gindumac/staff/profile_pictures/borja-garcia.png" alt="" />
            </div>
            <div className="col-lg-4 col-sm-12">
                <h5>Borja Garcia</h5>
                <p>Machinery trading experts and will be your direct contact for any further questions on the machine. Feel free to contact him</p>
                <p><a href="#">Consult more details&gt;&gt;&gt;&gt;</a></p>
            </div>
            <div className="col-lg-6 col-sm-12">
                <h5>Office</h5>
                <p>Carrer de Pallars 84-88, 2º 2a, 08018 Barcelona SPAIN</p>
                <p><a href="#">T: +34 931 760 221</a></p>
                <p><a href="#">E: contacto@gindumac.es</a></p>
                <p><a href="#">Check how to go there&gt;&gt;&gt;&gt;</a></p>
            </div>
        </div>
      </>
     );
}
 
export default Consultant;

