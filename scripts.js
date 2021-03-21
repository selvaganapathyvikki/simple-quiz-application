const quiz = [
    {
        question:"What does HTML stand for?",
        a:'Home Tool Markup Language',
        b:'Hyperlinks and Tools Markup Language',
        c:'Hyper Text Markup Language',
        answer:'c'
    },
    {
        question:"Choose the correct element for smallest heading?",
        a:'<h1>',
        b:'<h6>',
        c:'<h3>',
        answer:'b'
    },
    {
        question:"Choose the correct element for line break",
        a:'<br>',
        b:'<break>',
        c:'<b>',
        answer:'a'
    },
    {
        question:"choose the element which is responsible for adding javascript in HTML",
        a:'head',
        b:'script',
        c:'style',
        answer:'b'
    },
    {
        question:"which tag will come at first",
        a:'<head>',
        b:'<body>',
        c:'<script>',
        answer:'a'
    }
];

let currentquiznum = 0;
let score = 0;
const currquestion = document.getElementById('question');
const quizend = document.getElementById('quizid');
const ans1 = document.getElementById('a_text');
const ans2 = document.getElementById('b_text');
const ans3 = document.getElementById('c_text');
const btn = document.getElementById('submit');

const answers = document.querySelectorAll('.answer');

loadNext();


function loadNext(){
    deselectanswers();
    const currentquizd = quiz[currentquiznum];
    currquestion.innerText = currentquizd.question;
    ans1.innerText = currentquizd.a;
    ans2.innerText = currentquizd.b;
    ans3.innerText = currentquizd.c;
    
}

function getAnswer(){
    let selectedanswer = undefined;

    answers.forEach((ans)=>{
        if(ans.checked){
            selectedanswer = ans.id;
        }
    });
    return selectedanswer;
}

function deselectanswers() {
    answers.forEach((ans)=>{
        ans.checked = false;
    });
}
btn.addEventListener('click',()=>{
    const ans = getAnswer();
    if(ans){
        const currentquizd = quiz[currentquiznum];
        if(ans === currentquizd.answer){
            score++;
        }
    
        if(currentquiznum+1 < quiz.length){
            currentquiznum++;
            loadNext();        
        }
        else {
            quizend.innerHTML = `<h2>You scored ${score} out of ${quiz.length}</h2>`
            //alert('You are completed with score ' + score);
        }
    }
    
});