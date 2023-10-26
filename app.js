var inputContainer = document.querySelector('.input-container')
var ptag = document.querySelector('.report')
inputContainer.addEventListener('input',count)
inputContainer.addEventListener('keydown',add)
var countNum = 0

function add(e) {
    console.log(e.keyCode)
    var keyCode = e.keyCode
    if(keyCode === 32){
        countNum++
        console.log(countNum)
    }

}
function count(e) {
    // e.preventDefault()
    
    let ev = e.target.value
    var letters = ev.split('').join("").replace(/\s+/g,'')

   console.log(letters)


   ptag.innerHTML = 'You have typed in' + ' ' + countNum +' '+ 'word' +' and '+ letters.length + ' ' + 'characters'

   if(countNum >= 1){
       ptag.innerHTML = 'You have typed in' + ' ' + countNum +' '+ 'words' +' and '+ letters.length + ' ' + 'characters'   
    }

    if(letters.length === 0){
        countNum = 0
        ptag.innerHTML = 'You have typed in' + ' ' + countNum +' '+ 'words' +' and '+ letters.length + ' ' + 'characters'

    }


 
    
    console.log(ev)
}

