const details=[
    {
    "id" : "row1",
    "Class Name" : "Like a Butterfly",
    "Type" : "Boxing",
    "Hours" : "9:00AM -11:00AM",
    "Trainer" : "Aaron chapman",
    "Spots" : 10
 
    },
    {
    "id" : "row2",
    "Class Name" : "Mind & Body",
    "Type" : "Yoga",
    "Hours" : "8:00AM -9:00AM",
    "Trainer" : "Adam Stewart",
    "Spots" : 15 
    },
    {
    "id" : "row3",
    "Class Name" : "Cardio",
    "Type" : "Gym",
    "Hours" : "9:00AM - 10:00AM",
    "Trainer" : "Aaron chapman",
    "Spots" : 10     
    },
    {
    "id" : "row4",
     "Class Name" : "Wheel Pose Full Posture",
    "Type" : "Yoga",
    "Hours" : "7:00AM - 8:30AM",
    "Trainer" : "Aaron chapman",
    "Spots" : 15     
    },
    { 
    "id" : "row5",   
    "Class Name" : "Playful Dancer's Flow",
    "Type" : "Yoga",
    "Hours" : "8:00AM - 9:00AM",
    "Trainer" : "Doma Wilsom",
    "Spots" : 10     
    },
    { 
    "id" : "row6",   
    "Class Name" : "Cardio",
    "Type" : "Yoga",
    "Hours" : "8:00AM - 9:00AM",
    "Trainer" : "Doma Wilsom",
    "Spots" : 15    
    },
    {
    "id" : "row7",   
    "Class Name" : "Playful Dancer's Flow",
    "Type" : "Yoga",
    "Hours" : "8:00AM - 9:00AM",
    "Trainer" : "Doma Wilsom",
    "Spots" : 10     
    },
    {
    "id" : "row8",   
    "Class Name" : "Cardio",
    "Type" : "Yoga",
    "Hours" : "8:00AM - 9:00AM",
    "Trainer" : "Doma Wilsom",
    "Spots" : 15     
    },
    {
    "id" : "row9",   
    "Class Name" : "Playful Dancer's Flow",
    "Type" : "Yoga",
    "Hours" : "8:00AM - 9:00AM",
    "Trainer" : "Doma Wilsom",
    "Spots" : 10     
    },
    {
    "id" : "row10",   
    "Class Name" : "Playful",
    "Type" : "GYM",
    "Hours" : "8:00AM - 9:00AM",
    "Trainer" : "Doma Wilsom",
    "Spots" : 15     
    }
 ]
 
 function loadData(){
    if(localStorage.getItem('detailsJSON')!=null){
        console.log("Data is there in local Storage");
        
       let retrJson  = JSON.parse(localStorage.getItem("detailsJSON"));
       let userData = "<div id="+'"heading"'+"><span>Class Name </span><span>Type </span><span>Hours </span><span>Trainer</span><span>Spots </span></div>"
       for(let i=0;i<retrJson.length;i++){
       userData+="<div id="+'"'+retrJson[i].id+'"'+"><span>"+retrJson[i]["Class Name"]+" </span><span>"+retrJson[i].Type+"</span><span>"+retrJson[i].Hours+"</span><span>"+retrJson[i].Trainer+"</span><span>"+retrJson[i].Spots+"</span></div>"
       }
       document.getElementById('container').innerHTML=userData;
    }
    else{
        console.log("Data is Not there in local Storage");
       let strjson  =  JSON.stringify(details);
       localStorage.setItem("detailsJSON",strjson)
       let retrJson  = JSON.parse(localStorage.getItem("detailsJSON"));
       let userData = "<div id="+'"heading"'+"><span>Class Name </span><span>Type </span><span>Hours </span><span>Trainer</span><span>Spots </span></div>"
       for(let i=0;i<details.length;i++){
          userData+="<div id="+'"'+retrJson[i].id+'"'+"><span>"+retrJson[i]["Class Name"]+" </span><span>"+retrJson[i].Type+"</span><span>"+retrJson[i].Hours+"</span><span>"+retrJson[i].Trainer+"</span><span>"+retrJson[i].Spots+"</span></div>"
       }
       document.getElementById('container').innerHTML=userData;
       }
 
 }
 
 
 window.addEventListener("load",()=>{
    loadData();
 });
 