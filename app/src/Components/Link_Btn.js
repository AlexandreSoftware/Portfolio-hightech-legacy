import reactDom from "react-dom";
import "./css/Btn.css"

function Link_Btn(props){
    const link = props.link;
    const image = props.image;
    return( 
        <a  href={link} target="_blank" class="btn link-container">
             <img src={image} class="btn-image" />
        </a>

    );
}
export default Link_Btn;