import "./css/footer.css"
import Link_Btn from "./Link_Btn"
function Footer(){
    return (
        <footer class="footer">
            <Link_Btn text="link" link="https://github.com/xandrf" image={require("./img/GitHub-Mark-Light-120px-plus.png").default}></Link_Btn>
            <Link_Btn text="link" link="https://www.twitch.tv/xandrf" image={require("./img/TwitchGlitchWhite.svg").default}></Link_Btn>
            <Link_Btn text="link" link="https://www.linkedin.com/in/carlos-oliveira-8986a7175/" image={require("./img/LI-In-Bug.png").default}></Link_Btn>
            <Link_Btn text="link" link="https://twitter.com/XandrfDev" image={require("./img/Logo white.svg").default}></Link_Btn>
        
        </footer>
    )
}
export default Footer;