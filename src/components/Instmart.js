import { useState } from "react"

const Section =({title ,description,isVisible,setIsVisible})=>{
    // const [ isVisible , setIsVisible]= useState(false);
    return(
        <div>
            <h1>{title}</h1>
            {!isVisible ? 
             <button onClick={()=>{setIsVisible(true)}}>Show</button>
            :
            <button onClick={()=>{setIsVisible(false)}}>hide</button>
            }
            {isVisible && <p>{description}</p>}
        </div>
    )
}
const Instamart =()=>{
    const [visible ,setVisible] = useState({
        showAbout:false,
        showContact:false,
        showPhone:false,
        showButton:false
    })
    return (
        <div>
            <Section 
              title="ABout us" 
              description="This is About of Instamart"
              isVisible={visible.showAbout}
              setIsVisible={()=>{
                setVisible({
                    showAbout:true,
                    showContact:false,
                    showPhone:false,
                    showButton:false
                })
              }}/>
            <Section 
              title="contact"
               description="This is About of Instamart"
               isVisible={visible.showContact}
              setIsVisible={()=>{
                setVisible({
                    showAbout:false,
                    showContact:true,
                    showPhone:false,
                    showButton:false
                })
              }}/>
            <Section 
              title="phone" 
              description="This is About of Instamart"
              isVisible={visible.showPhone}
              setIsVisible={()=>{
                setVisible({
                    showAbout:false,
                    showContact:false,
                    showPhone:true,
                    showButton:false
                })
              }}/>
            <Section 
              title="button" 
               description="This is About of Instamart"
               isVisible={visible.showPhone}
              setIsVisible={()=>{
                setVisible({
                    showAbout:false,
                    showContact:false,
                    showPhone:false,
                    showButton:true
                })
              }}/>
        </div>
    )
}


export default Instamart;