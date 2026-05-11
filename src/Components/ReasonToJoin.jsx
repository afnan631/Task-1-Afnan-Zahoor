 import './ReasonToJoin.css'
function ReasonToJoin() {
    return (
        <>
            
                <div className="ReasonToJoinBox">
                    <h2 className='Reasons'>More Reasons to Join</h2>
                    <div className='CardsRow'>

                        <div className='Benefits'>
                             <div className="Benefit"> 
                                <h3>Enjoy on your TV</h3>
                                <p>Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.</p>
                                <img src='/computer.png' alt='computer'/>
                             </div>
                             <div className="Benefit"> 
                                <h3>Download your shows to watch offline</h3>
                                <p>Save your favorites easily and always have something to watch.</p>
                                <img src='/down.png' alt='computer'/>
                             </div>
                             <div className="Benefit"> 
                                <h3>Watch everywhere</h3>
                                <p>Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.</p>
                                <img className='mic' src='/mic.png' alt='computer'/>
                             </div>
                             <div className="Benefit"> 
                                <h3>Create profiles for kids</h3>
                                <p>Send kids on adventures with their favorite characters in a space made just for them — free with your membership.</p>
                                <img className='smile' src='/smile.png' alt='computer'/>
                             </div>
                        </div>

                         

                    </div>
                    
                </div>
            
        </>
    )
}
export default ReasonToJoin;