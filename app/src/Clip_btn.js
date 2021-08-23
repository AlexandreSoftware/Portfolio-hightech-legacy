import "./css/Btn.css"
import { Link } from 'react-router-dom';
function Clip_btn(props){
    const link = props.link;
    const text = props.text;
    return(
        <Link to={link} class="btn clip-btn">
            <div class="clipped-btn">
                {text}
            </div>
        </Link>
    )
}
export default Clip_btn;