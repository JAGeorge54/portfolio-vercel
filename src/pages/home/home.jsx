import BioCard from '../../components/bioCard'
import YoutubeEmbed from '../../components/youTubeEmbed';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Home() {
    return (
        <div className='homepageContent'>
            <div className='bioVideo'>
                <BioCard />
                <YoutubeEmbed embedId='ty_mlNuzll8?si=IdfUortm0KZ90j_v'/>
            </div>
            <div className='homeCards' style={{flexWrap: 'wrap'}}>
                <div className='hobbies'>
                    <h1>Hobbies</h1>
                    <div className='list'>
                        <ul>
                            <li>Collecting and Building Lego's</li>
                            <li>Video Games</li>
                            <li>Weight Lifting</li>
                            <li>Bike Riding</li>
                            <li>Barbecuing</li>
                        </ul>
                    </div>
                </div>
                <div className='experience'>
                    <h1>Experience</h1>
                    <div className='list'>
                        <ul>
                            <li>Army National Guard for six years as a FDC-Operator.</li>
                            <li>One year deployment to Ramadi Iraq.</li>
                            <li>Alcohol DSD(Direct Store Delivery) Driver for two years.</li>
                            <li>Driver manager for seven years.</li>
                            <li>Warehouse manager of two locations for five years</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;