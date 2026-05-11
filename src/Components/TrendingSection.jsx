import './TrendingSection.css'
import FAQ from './FAQ'
import MembershipCTA from './MembershipCTA.jsx'
import ReasonToJoin from './ReasonToJoin.jsx'
function TrendingSection() {
    return (
        <>
            <div className='Trendingsection'>
                <div className="Trendingbox">
                    <div className="Trend">
                    <h2>Trending Now</h2>
                    </div>
                    <div className='Trendingrow'>

                        <div className='card'>
                            <span className='numbers'>1</span>
                            <img src='/dhurandhar.jpg' className="image" />
                        </div>

                        <div className='card'>
                            <span className='numbers'>2</span>
                            <img src='/Tumbbad.png' className="image" />
                        </div>

                        <div className='card'>
                            <span className='numbers'>3</span>
                            <img
                                src='/19200.jpg' className="image" />
                        </div>

                        <div className='card'>
                            <span className='numbers'>4</span>
                            <img src='/pari.jpg' className="image" />
                        </div>

                        <div className='card'>
                            <span className='numbers'>5</span>
                            <img src='/bhoot.avif' className="image" />
                        </div>

                        <div className='card'>
                            <span className='numbers'>6</span>
                            <img src='/Kerala.webp' className="image" />
                        </div>

                        <div className='card'>
                            <span className='numbers'>7</span>
                            <img src= '/Venom.png' className="image" />
                        </div>

                        <div className='card'>
                            <span className='numbers'>8</span>
                            <img src='/Mutiny.png' className="image" />
                        </div>

                        <div className='card'>
                            <span className='numbers'>9</span>
                            <img src='aladdin.jpg' className="image" />
                        </div>

                        <div className='card'>
                            <span className='numbers'>10</span>
                            <img src='/kapil.jpg' className="image" />
                        </div>

                    </div>
                    <ReasonToJoin/>
                    <FAQ/>
                    <MembershipCTA/>
                </div>
            </div>
        </>
    )
}
export default TrendingSection