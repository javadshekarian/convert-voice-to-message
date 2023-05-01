var $=document
var SpeechRecognition=window.SpeechRecognition||window.webkitSpeechRecognition
var recognition=new SpeechRecognition()
var container=$.getElementById("container")
recognition.interimResults=true
recognition.lang="fa-IR"
recognition.start()
recognition.addEventListener('result',(e)=>{
    if(e.results[0].isFinal){
        container.innerHTML=e.results[0][0].transcript
    }
})