import { Card } from 'react-bootstrap'
function Contact(){
    return(
        <div id="contact" className="contact-container" style={{height:'100vh', width:'100%', backgroundColor:'#213642'}}>  
                <div style={{height:'auto', marginLeft:'5%', marginRight:"5%", width:"18rem"}}>
                    <h4 style={{color:'white', textAlign:'center'}}>You can find me in:</h4>
                    <Card style={{height:'auto', display:'flex', flexDirection:'row', justifyContent:'space-evenly', alignItems:'center', padding:'15%', boxShadow:'0px 1px 17px 0px rgba(255,255,255,0.75)', backgroundColor:'rgba(255,255,255,0.7)', border:'5px solid #E6EDF3'}}>
                    <a style={{color:'black', margin:'5%'}} href='https://github.com/DavidJoao' target='_blank'><i style={{ fontSize:'5rem' }} class="fa-brands fa-github"></i></a>
                    <a style={{color:'black', margin:"5%"}} href='https://www.linkedin.com/in/davidjoaosandoval/' target='_blank'><i style={{ fontSize:'5rem' }}  class="fa-brands fa-linkedin"></i></a>

                    </Card>
                </div>
        </div>
    )
}

export default Contact