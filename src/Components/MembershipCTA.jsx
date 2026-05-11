import './MembershipCTA.css'
function MembershipCTA(){
    return (
    <>
    <div className="MembershipCTA"> 
        <div className="CTA">
        <p className="membership1">Ready to watch? Enter your email to create or restart your membership.</p>
        </div>
<div className='gotoplan'>
        <input type='text' placeholder='Email address' className='inputbutton1'/>
        <button className="getstartbutton">Get Started  <img src='./buttonlogo.png'/></button>
        </div>
        </div>
    </>
    )
}
export default MembershipCTA;