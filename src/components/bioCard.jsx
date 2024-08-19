import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import jessePic from '../assets/jessePic.jpg'

function BioCard() {
    return (
        <div className='bioCard'>
                <h1>Jesse George</h1>
                <img src={jessePic} />
            <div className='bioCardText'>Highly motivated and results-driven professional seeking a career change to web development, prioritizing a better worklife balance.</div>
        </div>
    );
}

export default BioCard;