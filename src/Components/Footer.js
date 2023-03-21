import Footerlogo from './assets/Asset 20@4x.png'
import './Footer.css'
function Footer () {
    return (
        <footer>
        <div className='container'>
        <p className='text' align="left"> © Little Lemon 2023</p>
        <img src = {Footerlogo} className ="ft-logo" alt = "footer" height="120" align="right"></img>
        </div>
        </footer>
    )
}
export default Footer;