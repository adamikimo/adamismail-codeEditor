//vars:
//a-textarea
let codeEditor = document.querySelector('.code-editor');
//b-btns:
//1-result
let resultBtn = document.querySelector('.result-btn');
//2-erase
let eraseBtn = document.querySelector('.erase-btn');
//c-result
let MyRUSULT = document.querySelector('.MyRUSULT');


//myCodes
//resultBTN
resultBtn.addEventListener('click' , ()=>{
   MyRUSULT.innerHTML = codeEditor.value;
});
//eraseBtn
eraseBtn.addEventListener('click' , ()=>{
   MyRUSULT.innerHTML = "";
   codeEditor.value = "";
});