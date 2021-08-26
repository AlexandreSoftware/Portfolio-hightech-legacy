import Clip_Btn from "../Components/Clip_Btn"
function Project(props){
    let text = props.children;
    let title = props.title;
    let img = props.image;
    return(
       <div class="project">
           <img src={img} alt="cant load image" class="content-image"/>
           <span class="title">{title}</span>
           <div class="content-text">
               {text}
              
           </div>
           <button> 
            See Project
            </button>
       </div>
    )
}
export default Project;