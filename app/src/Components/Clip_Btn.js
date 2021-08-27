import "./css/Btn.css"
import { Link } from 'react-router-dom';
function Clip_Btn(props){
    const link = props.link;
    const text = props.text;
    return(
        <Link to={link} class="btn-container">
            <div  class="btn clip-btn">
                <div class="clipped-btn">
                    {text}
                </div>
            </div>
        </Link>
    )
}
export default Clip_Btn;