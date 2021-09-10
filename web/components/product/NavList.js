import React, { useState,useEffect } from 'react';
import $ from 'jquery'
const NavList = () => {

    const [ infoState , setInfoState ] = useState({
        activeObj:null,
        objects:[
          {id:"#list-item-1", name:"Product Consultant"},
          {id:"#list-item-2", name:"Description"},
          {id:"#list-item-3", name:"Basic information"},
          {id:"#list-item-4", name:"Technical information"},
          {id:"#list-item-5", name:"Details display"},
          {id:"#list-item-6", name:"Inspection report"}
        ],
        navFixed:false
      });

      // Those two functions r used to switch navList status through "infoState".
      const toggleActive=(index)=>{
        infoState.navFixed=true;
        $("#list-example").addClass("fixed-top")
        setInfoState({...infoState,activeObj:infoState.objects[index]})
      }
      const toogleActiveStyles = (index) => {
        if(infoState.objects[index]===infoState.activeObj){
          return 'generalInfoLi list-group-item list-group-item-action active'
        }
          return 'generalInfoLi list-group-item list-group-item-action'
      }
    
      // listening scroll event, and change className of navList dom elements directly.
      useEffect(()=>{
        $(window).scroll(function(){
          let refEle=$("#list-item-1").offset()
          if(refEle!=undefined){
            let refitemToTop= refEle.top-$(window).scrollTop();
            if(refitemToTop<50){
              $("#list-example").addClass("fixed-top")
            }else{
              if($("#list-example").hasClass("fixed-top")){
                $("#list-example").removeClass("fixed-top")
              }
            }
          }
        });
      });
    

    return ( 
        <div id="list-example" className={infoState.navFixed ? "list-group list-group-horizontal text-center fixed-top":"list-group list-group-horizontal text-center"}>
            {
            infoState.objects.map((item,index) => 
                <a 
                key={index}
                className={toogleActiveStyles(index)}
                href={item.id}
                onClick={() => {
                    toggleActive(index)
                }}
                >{item.name}</a>
            )
            }
            <br />
        </div>
     );
}
 
export default NavList;

