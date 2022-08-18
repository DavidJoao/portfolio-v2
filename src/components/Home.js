import { Image, Card, ListGroup } from 'react-bootstrap' 

function Home(){
    return(
        <div id='home' style={{backgroundColor:'#213642', width:'100%', height:'90vh', paddingTop:'5%'}}>
                <Card className='main-card' style={{ width: '18rem', padding:'40px', margin:'0 auto', width:'80%', background:'none', border:'none', color:'white'}}>
                    <Image style={{borderRadius:'100%', width:'250px', border:'5px solid #E6EDF3', boxShadow:"1px -1px 32px -5px #E6EDF3"}} src='https://i.ibb.co/7jCBG8X/myphoto.jpg'/>
                    <Card.Body>
                        <Card.Title>David Sandoval</Card.Title>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                        </Card.Text>
                    </Card.Body>
                </Card>

        </div>
    )
}

export default Home