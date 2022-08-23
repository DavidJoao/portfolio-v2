import EducationCards from "./EducationCards"

function Education(){
    return(
        <div id="pagesan" className="education-container pb-5 pt-5 d-flex flex-column" style={{height:'auto', width:'100%', backgroundColor:'#213642'}}>
            <EducationCards institutionName={"College of the Canyons"} date={"2018 - 2021"} location={"Valencia, CA"} logo={"https://images.credly.com/images/8807454d-8461-400c-bc25-76841fc87c61/blob.png"} description={"Program focused in advanced data structures, computer architecture, algorithms, development with Java, and program design."}/>
            <EducationCards institutionName={"General Assembly"} date={"2022"} location={"(Remote)"} logo={"https://ga-shop-production-herokuapp-com.global.ssl.fastly.net/assets/images/logo_1200_by_627_1QIVL.jpg"} description={"A 500+ hour software engineering intensive where students are focused in the development of full-stack applications with JavaScript, React, Node, MongoDB through GA's Software Engineering Immersive. Relevant Technologies: JavaScript, Ruby, Ruby on Rails, React, Node, jQuery, HTML, CSS, MongoDB & PostgreSQL."}/>
        </div>
    )
}

export default Education