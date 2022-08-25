import { Image, Card } from 'react-bootstrap' 

function Home(){
    return(
        <div id='home' style={{backgroundColor:'#213642', width:'100%', height:'100vh', paddingTop:'15%', display:'flex', flexDirection:"column", justifyContent:"center", alignItems:'center'}}>
            <h1 className="line-1 anim-typewriter" style={{color:'white', fontSize:'45px'}}>Hello, world!_</h1>
                <Card className='main-card d-flex flex-sm-row' style={{ width: '18rem', padding:'40px', margin:'0 auto', width:'80%', background:'#17262e', color:'white', border:'2px solid #E6EDF3', boxShadow:'0px 1px 17px 0px rgba(255,255,255,0.75)'}}>
                    <Image style={{borderRadius:'100%', width:'250px', border:'5px solid #E6EDF3'}} src='https://i.ibb.co/7jCBG8X/myphoto.jpg' className='m-md-5'/>
                    <Card.Body>
                         <h4>Welcome! I'm</h4>
                        <h1 style={{ border:'1px solid white', width:'auto', padding:'1%', borderRadius:'15px'}} className='mt-3'>David Sandoval</h1>
                        <h5>
                        Front end developer based in Los Angeles, California with a passion for technology and always open to improve and learn new skills. I build custom and responsive web apps using latest technologies.
                        </h5>
                    </Card.Body>
                </Card>

        </div>
    )
}

export default Home