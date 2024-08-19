import GithubBlack from '../../assets/githubBlack.jpg';
import LinkedWhiteBorder from '../../assets/linkedinWhiteBorder.png';



function Contact() {
    return (
        <div className="contactContent" style={{display: 'flex', justifyContent: 'space-evenly', flexDirection: 'column', alignItems: 'center', height: '100%'}}>
            <div className='links'>
                <div className="linkedIn">
                    <img src={LinkedWhiteBorder} style={{height: '100px', width: '100px', borderRadius: '6px'}} />
                    <a className='linkedinText' href="http://www.linkedin.com/in/jageorge54">linkedin.com/in/jageorge54</a>
                </div>
                <div className="github">
                    <img src={GithubBlack} style={{height: '100px', width: '100px', borderRadius: '6px'}} />
                    <a className='githubText' href="https://github.com/JAGeorge54">github.com/JAGeorge54</a>
                </div>
            </div>
        </div>
    )
}

export default Contact