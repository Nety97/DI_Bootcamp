// import Carousel from 'react-bootstrap/Carousel'
import Card from 'react-bootstrap/Card'
import {Link} from 'react-router-dom'
import Footer from './Footer'

function Home() {
    return(
        <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', overflowX: 'hidden'}}>
         
            <div className='image'>
                <h1 className='titleHome'>TROLLEO</h1>
            </div>
            <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
                <div>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="https://img-premium.flaticon.com/png/512/3201/premium/3201623.png?token=exp=1632656279~hmac=c527dc30a8cc3239364182fe28cdc3ae" />
                        <Card.Body>
                            <Card.Title>Manage your tasks</Card.Title>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                            </Card.Text>
                           
                        </Card.Body>
                    </Card>
                </div>
                <div>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="https://cdn-icons-png.flaticon.com/512/4753/4753192.png" />
                        <Card.Body>
                            <Card.Title>Save Time</Card.Title>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                            </Card.Text>
                           
                        </Card.Body>
                    </Card>
                </div>
                <div>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="https://cdn-icons-png.flaticon.com/512/2799/2799195.png" />
                        <Card.Body>
                            <Card.Title>Control your Workflow</Card.Title>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                            </Card.Text>
                           
                        </Card.Body>
                    </Card>
                </div>
            </div>
            <div className='someText'>
                <h2>Its not just Work. Its a way of Working.</h2>
                <h5>
                    Create many tables and tasks as you want. <br/> Organice them by status: To do, In progress and Done. <br/> 
                    Try out. Its free!
                </h5>
                <Link to='/register' className='margin Mybtn'>Let's Start</Link>
            </div>
            <Footer/>
        </div>     
    )
}

export default Home