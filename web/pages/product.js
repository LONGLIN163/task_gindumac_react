import Header from '../components/public/Header'
import SeoHead from '../components/public/SeoHead'
import Footer from '../components/public/Footer'
import axios from "axios"
import apis from './api/apis';
import TopBriefInfo from '../components/product/TopBriefInfo'
import Description from '../components/product/Description'
import Consultant from '../components/product/Consultant'
import BasicInfo from '../components/product/BasicInfo'
import TechInfo from '../components/product/TechInfo'
import DetailsDisplay from '../components/product/DetailsDisplay'
import Inspection from '../components/product/Inspection'
import NavList from '../components/product/NavList'


 const Product=(props)=> {

  const productInfo=props.results

  return (
    <div data-bs-spy="scroll" data-bs-target="#list-example" data-bs-offset="0" className="scrollspy-example" tabIndex="0">

      <SeoHead seotitle={productInfo.seo_title}/>
      
      <Header/>

      {/* Quick information dispaly above nav list */}
      <TopBriefInfo productInfo={productInfo} />
      
      <div className="banner container"> 
        <br />
        <div className="row align-self-center outer" data-bs-spy="scroll" data-bs-target="#navbar-example">
          <div className="col-lg-12 col-sm-12">
              {/* Important componet */}
              <NavList/>
          </div>

          {/* Information dispaly under nav list */}
          <div className="col-lg-12 col-sm-12">
            <div>
              <Consultant/>
              <Description description={productInfo.description}/>
              <BasicInfo productInfo={productInfo} />
              <TechInfo technical_information={productInfo.technical_information}/>
              <DetailsDisplay images={productInfo.images}/>
              <Inspection/>
            </div>

          </div>
          <div className="col-lg-1 col-sm-0"></div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

// when come to the page, fetch product data by id.
Product.getInitialProps=async(ctx)=>{
  let id=ctx.query.id;
  const promise=new Promise((resolve)=>{
      axios(apis.getProductById+id).then(
          (res)=>{
              resolve(res.data)
          }
      )
  })
  return await promise;
}

export default Product;