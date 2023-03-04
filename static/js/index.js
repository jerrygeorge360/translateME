const pasteInnerCon=document.getElementById("paste-inner-con");
pasteInnerCon.addEventListener('click',paste);

const textareaRight=document.getElementById('textarea-right')
textareaRight.addEventListener('keydown',hidePaste);

const copyCon=document.getElementById('copy-con');
copyCon.addEventListener("click",copyText)

const textAreaLeft=document.getElementById("textarea-left");

const translate=document.getElementById("translate")
translate.addEventListener("click",translateapi)

const lang=document.getElementById("languages");


function paste(){
    try{
        navigator.clipboard.readText().then(function(data) {
            textAreaRight.value+=data;
          });
          pasteInnerCon.style.display="none";

    }
    catch (error) {
        console.error(error.message);
      }
}



function hidePaste(){
    pasteInnerCon.style.visibility="hidden";
}

function copyText(){
    navigator.clipboard.writeText(textAreaLeft.value)?alert("copied"):"";

}


async function translateapi(){
    let data=textareaRight.value
    let language=lang.options[lang.selectedIndex].value
    let response
    let translated
    response=await fetch("https://jbotrex.pythonanywhere.com/translate",
    {method:"POST",headers: { "Content-type": "application/json" },
    body: JSON.stringify({"data":data,"language":language})})
    translated=await response.text() 
    textAreaLeft.value=translated
}

function d(){
    textAreaLeft.value="ultimate nigga is alive. lorem5 "
}