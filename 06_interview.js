function TCSIntervieweligibility(gradScore,hscScore,sscScore,candidateName){

    if (gradScore >= 70 && hscScore >= 80 && sscScore >= 90) {

        console.log(`${candidateName} You are eligible for the TCS Interview...`);
    } 
    else {
       console.log(`${candidateName} Unfortunates you are not Eligible for the TCS Interview...`); 
    }

}
TCSIntervieweligibility(80,86,90,"Shreyas")
TCSIntervieweligibility(70,65,55,"JackDanial")
TCSIntervieweligibility(60,79,88,"Tuberg")