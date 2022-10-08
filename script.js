let questions=[
    {question:"2+2?",
     a:4,
     b:6,
     c:7,
     d:8,
     correct:"a"
     },
     {question:"Smallest state in Nigeria?",
     a:"Imo",
     b:"Kano",
     c:"Lagos",
     d:"ogun",
     correct:"c"
     },
     {question:"2*4?",
     a:41,
     b:60,
     c:15,
     d:8,
     correct:"d"
     },
     {question:"A female dog is called ?",
     a:"Bitch",
     b:"Duke",
     c:"Alpha",
     d:"Dog",
     correct:"a"
     },
     {question:"2+4?",
     a:0.6,
     b:35,
     c:6,
     d:89,
     correct:"c"
     },
     {question:"which day do we celebrate valentine's day?",
     a:"December 25th",
     b:"march 15th",
     c:"April 6th",
     d:"Feburary 14th",
     correct:"d"
     },
     {question:"2+87?",
     a:0.6,
     b:35,
     c:6,
     d:89,
     correct:"d"
     },
     {question:"CSS stands for?",
     a:"Cascading Style Sheets",
     b:"Castro Coding Set",
     c:"Carol case standings",
     d:"none of the above",
     correct:"a"
     },
     {question:"2/2?",
     a:0.6,
     b:1,
     c:2,
     d:89,
     correct:"b"
     }
]
//start game holders
let Start=document.querySelector(".start");
let Startdiv=document.querySelector(".startdiv");
let Card=document.querySelector(".part");
let Subcon=document.querySelector(".subcontainer")
let Next=document.querySelector(".butt");

//setting queston holders
let Question=document.querySelector(".questiondiv");
let index=0;
let score=0;

//options
let optionA=document.querySelector(".atext");
let optionB=document.querySelector(".btext");
let optionC=document.querySelector(".ctext");
let optionD=document.querySelector(".dtext");
let checkbox=document.querySelectorAll(".a");

//this starts the quiz

Start.addEventListener("click",()=>{
    Startdiv.classList.add("hide");
    Card.classList.remove("hide");
    Next.classList.remove("hide");
    Subcon.classList.add("design");
    setQuestion();
})

//this sets new questions
function setQuestion() {
    checkbox.forEach(element => {
        element.checked=false;});
    Question.innerHTML=questions[index].question;
    optionA.textContent=questions[index].a;
    optionB.textContent=questions[index].b;
    optionC.textContent=questions[index].c;
    optionD.textContent=questions[index].d;
    
}
//This gets the id of the radio checked and sets it to answer and returns it e.g it gets "a" and returns it
function getSelected() {
    let answer;
    checkbox.forEach(element=>{
        if (element.checked) {
            answer=element.id;
           
        }
    })
     return answer;
    }


    //this adds up score as users get the answers correctly
Next.addEventListener("click",()=>{
 const answer=getSelected();
if(answer){
if(answer===questions[index].correct){
     score++;
console.log(score);
}
}
    index++;
    if (index<questions.length) {
        setQuestion();
    }else{
        Card.textContent=`You scored:${score}/${questions.length}`
        
        Card.classList.add("scorecard")
        Startdiv.classList.remove("hide");
        Card.classList.remove("hide");
        Next.classList.add("hide");
        Subcon.classList.remove("design");

    Start.textContent="Restart"
    Start.addEventListener("click",()=>{
        location.reload();
    })
    }
    


})





 
        
    
    
    



 



