import './Hero.css'
import Navbar from './Navbar';
import Banner from './Banner'
import Curve from './Curve'
import TrendingSection from './TrendingSection'
function Hero(){
    return (
        <>
        <div className="hero">
            <Navbar/>
            <Banner/>
            <Curve/>
            <TrendingSection/>
        </div>
        </>
    )
}
export default Hero;