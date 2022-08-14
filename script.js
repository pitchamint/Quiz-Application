const questionData = [
	{
	  question:"1.ข้อใดไม่ใช่ระบบปฏิบัติการ",
      a:"ระบบปฏิบัติการดอส",
      b:"ไมโครซอฟท์เวิร์ด",
      c:"ไมโครซอฟต์วินโดวส์",
      d:"ระบบปฏิบัติการแอนดรอยด์",
      correct:"b"
	},
    {
        question:"2.ข้อใดคือโปรแกรม Web Browser",
        a:"Google Chrome",
        b:"Keyboard",
        c:"Mouse",
        d:"Monitor",
        correct:"a"
    },
    {
        question:"3.ข้อใดคือฮา์ดแวร์",
        a:"Keyboard",
        b:"Mouse",
        c:"Monitor",
        d:"ถูกทุกข้อ",
        correct:"d"
    },
    {
        question:"4.RAM คืออะไร",
        a:"หน่วยความจำถาวรที่ติดตั้งมาพร้อมกับแผงเมนบอร์ด",
        b:"หน่วยความจำเสมือน",
        c:"หน่วยความจำที่ทำงานแทนเมนบอร์ด",
        d:"หน่วยความจำชั่วคราวที่สามารถอ่านและเขียนข้อมูลได้",
        correct:"a"
    },
    {
        question:"5.ROM คืออะไร",
        a:"หน่วยความจำถาวรที่ติดตั้งมาพร้อมกับแผงเมนบอร์ด",
        b:"หน่วยความจำเสมือน",
        c:"หน่วยความจำที่ทำงานแทนเมนบอร์ด",
        d:"หน่วยความจำชั่วคราวที่สามารถอ่านและเขียนข้อมูลได้",
        correct:"a"
    },
    {
        question:"6.ข้อมูลสารสนเทศ คืออะไร",
        a:"ข้อมูลที่ได้รับการกรอง และเรียบเรียง ที่สามารถนำไปใช้งานได้ ",
        b:"ข้อมูลที่ประมวลผลแล้ว",
        c:"ความเป็นจริงที่ยังเป็นข้อมูลดิบซึ่งไม่ได้ผ่านการประมวลผลใด ๆ",
        d:"ผลลัพท์ของการทำงาน",
        correct:"b"
    },
    {
        question:"7.ข้อใดไม่ใช่ระบบปฏิบัติการ",
        a:"Microsoft Windows98",
        b:"Microsoft Windows ME",
        c:"Microsoft Windows XP",
        d:"Microsoft Office",
        correct:"d"
    },
    {
        question:"8.MOUSE คืออะไร",
        a:"เครื่องพิมพ์",
        b:"อุปกรณ์นำเข้าข้อมูล เพื่อให้เราสามารถป้อนคำสั่งต่าง ๆ ได้",
        c:"อุปกรณ์สื่อสาร",
        d:"อุปกรณ์แสดงผล",
        correct:"b"
    },
    {
        question:"9.อินเตอร์เน็ต คืออะไร",
        a:"ระบบเมนเฟรม",
        b:"ระบบเครือข่ายที่เชื่อมโยงกันหลาย ๆ เครือข่ายทั่วโลก",
        c:"ระบบเครือข่ายเดี่ยว",
        d:"ระบบไมโครคอมพิวเตอร์",
        correct:"b"
    },
    {
        question:"10.WWW ย่อมาจากอะไร",
        a:"World Wide Wan",
        b:"World Wan Web",
        c:"World War Web",
        d:"World Wide Web",
        correct:"d"
    }
];

const questionEl = document.getElementById('question')
const answerEls = document.querySelectorAll('.answer')
const container = document.getElementById('quiz')
const choiceA = document.getElementById('a-text')
const choiceB = document.getElementById('b-text')
const choiceC = document.getElementById('c-text')
const choiceD = document.getElementById('d-text')

const submitBtn = document.getElementById('submit')

let currenQuestion = 0;
let score = 0;
loadQuestion();

function loadQuestion(){
    checkChoice();
    const currentQuizData =questionData[currenQuestion];
    questionEl.innerText = currentQuizData.question;
    choiceA.innerText = currentQuizData.a;
    choiceB.innerText = currentQuizData.b;
    choiceC.innerText = currentQuizData.c;
    choiceD.innerText = currentQuizData.d;
}

function checkChoice(){
    answerEls.forEach(answerEl=>answerEl.checked = false); 
}

submitBtn.addEventListener('click',()=>{
    let answer = getChoiceAnswer();
    if(answer){
        if(answer === questionData[currenQuestion].correct){
            score++;
        }
        currenQuestion++;
        if(currenQuestion<questionData.length){
            loadQuestion();
        }else{
            container.innerHTML = `<h2>คุณได้คะแนน ${score}/${questionData.length}</h2>`
        }
    }
});

function getChoiceAnswer(){
    let answer;
    answerEls.forEach(answerEl=>{
        if(answerEl.checked){
            answer = answerEl.id;
        }
    });
    return answer;
}


