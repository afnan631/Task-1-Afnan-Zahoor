import './FAQ.css'
function FAQ(){
return(
    <>
      <div className="FAQSection">
                    <h2 className='FAQ'>Frequently Asked Questions</h2>
                    <div className='Questions'>
                        <div className='Question'>
                              <p className='QuestionStatement'>What is Netflix?</p>
                              <button className='expandbtn'>&#xff0b;</button>
                        </div>
                        <div className='Question'>
                              <p className='QuestionStatement'>How much does Netflix cost?</p>
                              <button className='expandbtn'>&#xff0b;</button>
                        </div>
                        <div className='Question'>
                              <p className='QuestionStatement'>Where can I Watch?</p>
                              <button className='expandbtn'>&#xff0b;</button>
                        </div>
                        <div className='Question'>
                              <p className='QuestionStatement'>How do I cancel?</p>
                              <button className='expandbtn'>&#xff0b;</button>
                        </div>
                        <div className='Question'>
                              <p className='QuestionStatement'>What can i watch on Netflix?</p>
                              <button className='expandbtn'>&#xff0b;</button>
                        </div>
                        <div className='Question'>
                              <p className='QuestionStatement'>is Netflix good for kids?</p>
                              <button className='expandbtn'>&#xff0b;</button>
                        </div>
                    </div>
                </div>
    </>
)
}
export default FAQ;
