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
    const [visible ,setVisible] = useState("about")
    return (
        <div>
            <Section 
              title="About us" 
              description="This is About of Instamart"
              isVisible={visible==="about"}
              setIsVisible={()=>{
                setVisible("about")
              }}/>
            <Section 
              title="contact"
               description="This is About of Instamart"
               isVisible={visible==="contact"}
              setIsVisible={()=>{
                setVisible("contact")
              }}/>
            <Section 
              title="phone" 
              description="This is About of Instamart"
              isVisible={visible==="phone"}
              setIsVisible={()=>{
                setVisible("phone")
              }}/>
            <Section 
              title="button" 
               description="This is About of Instamart"
               isVisible={visible==="button"}
              setIsVisible={()=>{
                setVisible("button")
              }}/>
        </div>
    )
}


export default Instamart;