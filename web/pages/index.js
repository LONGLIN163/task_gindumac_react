import Footer from '../components/public/Footer'
import Header from '../components/public/Header'
import SeoHead from '../components/public/SeoHead'
import apis from './api/apis'
import axios from 'axios'
import Link from 'next/link'


const Home=({results})=>{
  return (
    <div>

      <SeoHead seotitle={"Sell and buy used machinery out of metalworking and plastics processing industries..."}/>

      <Header/>

      <div className="album py-5 bg-light">
                <div className="container">
                    <div id="productList" className="row row-cols-1 row-cols-sm-2 row-cols-md-4 g-3 card-columns">
                         {/* Creat product card gallery */}
                         {
                           results.map((item,index) =>
                           <div key={index} className="col" >
                             <div className="card h-100">
                               <Link href={{ pathname:"/product", query:{id:item.id}}}>
                                 <a>
                                   <img className="card-img-top" width="100%" height="225" src={item.thumbnail.thumbnail_url} alt="Card image cap"/>
                                   <div className="card-body">
                                     <h5 className="card-title">{item.seo_title}</h5>
                                     <p className="card-text">{item.description.substr(0,100)}....</p>
                                   </div>
                                   <div className="card-footer">
                                   <small className="text-muted">Built_on:{item.built_on}</small>
                                   </div>
                                 </a>
                               </Link>
                             </div>
                           </div>
                          )
                         }
                    </div>
                </div>
            </div>
      <Footer/>
    </div>
  )
}

// when come to the page, fetch all product data.
Home.getInitialProps=async()=>{
  const promise=new Promise((resolve)=>{
      axios(apis.getAllProduct).then(
          (res)=>{
              resolve(res.data)
          }
      )
  })
  return await promise;
}

export default Home;