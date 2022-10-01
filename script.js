// Character Set Table -> https://net-comber.com/charset.html

const result = document.getElementById('result');
const clipboard = document.getElementById('clipboard');
const uppercase = document.getElementById('uppercase');
const encbr = document.getElementById('encbr');
const generate = document.getElementById('generate');

function generateGuid(upper, braces) {

    function s4() {
        return Math.floor((1 + Math.random()) * 0x10000)
          .toString(16)
          .substring(1);
      }
    let generatedGuid =  s4() + s4() + '-' + s4() + '-' + s4() + '-' +
        s4() + '-' + s4() + s4() + s4();
  
    if(upper) {
        generatedGuid = generatedGuid.toUpperCase();
    }

    if(braces) {
        generatedGuid = "{" + generatedGuid+"}"
    }

    return generatedGuid;
}

//Event Listeners
generate.addEventListener('click', () => {
    const hasUpper = uppercase.checked;
    const hasEncbr = encbr.checked;

    result.innerText = generateGuid(hasUpper, hasEncbr);
});

//copy password to clipboard
clipboard.addEventListener('click', () => {
    const guid = result.innerText;

    const cb = navigator.clipboard;
    cb.writeText(guid);
    alert("Guid copied to clipboard!");

    //reference -> https://dev.to/tqbit/how-to-use-javascript-to-copy-text-to-the-clipboard-2hi2
});