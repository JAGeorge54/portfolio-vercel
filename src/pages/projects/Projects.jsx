import Card from 'react-bootstrap/Card';
import Pacman from '../../assets/PacMan1.png'
import Oneeye from '../../assets/oneeyenew.png'
import Map from '../../assets/mapnew.jpg'
import BadBank from '../../assets/BadBankCrop.png'
import inProgress from '../../assets/inProgress.jpg'

function Projects() {
    return (
        <div className='projectsContent'>
            <div style={{display: 'flex', justifyContent: 'center'}}>
                <h1>Current Project</h1>
            </div>
            <div className="cards">
                <div className='card'>
                    <Card style={{ width: '18rem' }}>
                        <div className='cardImg'>
                            <Card.Img variant="top" src={inProgress} style={{height: '261.29px'}}/>
                        </div>
                        <Card.Body>
                            <Card.Title>Full Stack Banking App</Card.Title>
                            <Card.Text>
                                <a href='/comingSoon'>Github Link</a>
                                <br />
                                <a href='/comingSoon'>See it in action</a>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
            </div>
            <div style={{display: 'flex', justifyContent: 'center'}}>
            <h1>Past Projects</h1>
            </div>
            <div className='cards'>
                <div className='card'>
                    <Card style={{ width: '18rem' }}>
                        <div className='cardImg'>
                            <Card.Img variant="top" src={Pacman} style={{height: '261.29px'}}/>
                        </div>
                        <Card.Body>
                            <Card.Title>PacMan</Card.Title>
                            <Card.Text>
                                <a href="https://github.com/JAGeorge54/factoryForPacMen">Github Link</a>
                                <br />
                                <a href="https://jageorge54.github.io/factoryForPacMen/">See it in action</a>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                <div className='card'>
                    <Card style={{ width: '18rem' }}>
                        <div className='cardImg'>
                            <Card.Img variant="top" src={Oneeye} />
                        </div>
                        <Card.Body>
                            <Card.Title>Eye Movement</Card.Title>
                            <Card.Text>
                                <a href="https://github.com/JAGeorge54/eyeMovementExercise">Github Link</a>
                                <br />
                                <a href="https://jageorge54.github.io/eyeMovementExercise/">See it in action</a>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                <div className='card'>
                    <Card style={{ width: '18rem' }}>
                        <div className='cardImg'>
                            <Card.Img variant="top" src={Map} />
                        </div>
                        <Card.Body>
                            <Card.Title>Bus Tracking</Card.Title>
                            <Card.Text>
                                <a href="https://github.com/JAGeorge54/RealTimeBusTracker">Github Link</a>
                                <br />
                                <a href="https://jageorge54.github.io/RealTimeBusTracker/">See it in action</a>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                <div className='card'>
                    <Card style={{ width: '18rem' }}>
                        <div className='cardImg'>
                            <Card.Img variant="top" src={BadBank} />
                        </div>
                        <Card.Body>
                            <Card.Title>BadBank</Card.Title>
                            <Card.Text>
                                <a href="https://github.com/JAGeorge54/badBank_threeTier">Github Link</a>
                                <br />
                                <a href="https://jageorge54-badbank-threetier-b8ee485df166.herokuapp.com/#/">See it in action</a>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </div>
    )
}

export default Projects