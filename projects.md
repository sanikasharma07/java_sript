project 2
const form=document.querySelector('form')
form.addEventListener('submit',function(e){
  e.preventDefault()
const height=Number(document.querySelector('#height').value);
const weight=Number(document.querySelector('#weight').value);
const result=document.querySelector('#results')
if(height===0 || isNaN(height) || isNaN(weight) || height<0 || weight<0){
result.innerHTML="please enter valid number";
return;
}
const ans=(weight*10000)/(height*height);
result.innerHTML=ans.toFixed(2);
const div=document.createElement('div')
result.appendChild(div)
if(ans<18.6) div.innerHTML=`<span> Underweight </span>`
else if(18.6<=ans && ans<24.9) div.innerHTML=`<span> Underweight </span>`
else div.innerHTML=`<span> Overweight </span>`
})


*****project3****************
const time=document.querySelector('#clock')

setInterval(function(){
  time.innerHTML=new Date().toLocaleString()
},1000)

*********project4******
let randomnum=Math.floor(Math.random()*100+1)
const submit=document.querySelector
('#subt')
const guess=document.querySelector('.guessField')
const prevguesses=document.querySelector('.guesses')
const remaining=document.querySelector('.lastResult')
const looh=document.querySelector('.lowOrHi')
const startover=document.querySelector('.resultParas');
const p=document.createElement('p');
let remain =10
let gs=[]
let gameplay=true
if(gameplay){
submit.addEventListener('click',function(e){
  e.preventDefault();
  const userinput = Number(guess.value);
  if(isNaN(userinput) || userinput < 1 || userinput > 100){
    looh.innerHTML = "Enter a number between 1 and 100";
    return;
}
     if(remain===0) {
      looh.innerHTML=`Oops!! Game Ends.The correct number was ${randomnum}`;
      gameplay=false;
     endgame()
     return;
     }

     if(userinput===randomnum){
        looh.innerHTML='Correct';
        remaining.innerHTML=`${--remain}`;
        gs.push(userinput);
        prevguesses.innerHTML=`${gs}`
        gameplay=false;
        endgame()
        return;
     }
     else if(userinput>randomnum)
     looh.innerHTML='The value is Lower';
     else looh.innerHTML='The value is Higher';
     remaining.innerHTML=`${--remain}`;
     gs.push(userinput);
     prevguesses.innerHTML=`${gs}`
   

})
}
function endgame(){
p.classList.add('button')
guess.value=''
guess.setAttribute('disabled','')
p.innerHTML=`<h2 id="newgame"> Start new game</h2>`
startover.appendChild(p)
newgame()
}
function newgame(){
const newgame=document.querySelector('#newgame')
newgame.addEventListener('click',function(){
  remain=10
  gs=[]
  randomnum=Math.floor(Math.random()*100+1)
  prevguesses.innerHTML=''
  remaining.innerHTML=''
  guess.removeAttribute('disabled'  )
  startover.removeChild(p)
  gameplay=true
})
}