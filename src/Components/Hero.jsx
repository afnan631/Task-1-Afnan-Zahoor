import './Hero.css'
import Navbar from './Navbar';
import Banner from './Banner'
import Curve from './Curve'
function Hero(){
    return (
        <>
        <div className="hero">
            <Navbar/>
            <Banner/>
            <Curve/>
            
        </div>
        </>
    )
}
export default Hero;