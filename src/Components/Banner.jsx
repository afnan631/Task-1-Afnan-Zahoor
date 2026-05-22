import './Banner.css'
function Banner(){
    return(
       
        <div className="BannerParent">
        <div className="bannerbox">
        <div className="banner">
        <h1 className="heading">Unlimited movies,TV shows, and more</h1>
        <p className="membership">Start at Rs.250,Cancel anytime.</p>
        <h2 className="membership1">Ready to watch? Enter your email to create or restart your membership.</h2>
        <div className='gotoplan'>
        <input type='text' placeholder='Email address' className='inputbutton'/>
        <button className="getstartbutton">Get Started  <img src='./buttonlogo.png'/></button>
        </div>
        </div>
        </div>
        </div>
        
    )
}
export default Banner;