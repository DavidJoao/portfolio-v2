import EducationCards from "./EducationCards"

function Education(){
    return(
        <div className="education-container" id="education" style={{height:'95vh', width:'100%', backgroundColor:'#213642'}}>
            <EducationCards institutionName={"College of the Canyons"} date={"2018 - 2021"} location={"Valencia, CA"}/>
            <EducationCards institutionName={"General Assembly"} date={"2022"} location={"(Remote)"}/>
        </div>
    )
}

export default Education