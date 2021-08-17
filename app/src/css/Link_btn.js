import "./css/Btn.css"

function Link_btn(props){
    const link = props.link;
    const image = props.image;
    const text = props.text;
    return( 
        <div class="btn link-container">
             <img src="./image/wp5842964.jpg" alt="Italian Trulli" />
            <a href={link} class="link">{text}</a>
        </div>

    );
}
export default Link_btn;