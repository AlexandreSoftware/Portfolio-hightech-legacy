import "./css/Btn.css"
function Clip_btn(props){
    const link = props.link;
    const text = props.text;
    return(
        <span class="btn clip-btn">
            <div class="clipped-btn">
                <a href={link}>
                    {text}
                </a>
            </div>
        </span>
    )
}
export default Clip_btn;