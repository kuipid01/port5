let arrowRight = document.querySelector('.arrow-right')
let rowLeft = document.querySelector('.leftarrow')
let arrowLeft = document.querySelector('.arrow-left')
let sliderContainer = document.querySelector('#sliderContain')

let    marginLeftVal = 0;

arrowRight.addEventListener('click', () => {
    
    let newNum =   marginLeftVal-100;
    marginLeftVal=newNum;
    console.log(marginLeftVal)
    let stringVal = marginLeftVal.toString();
    if(marginLeftVal==-300){
        
        arrowRight.style.cursor= "none";
        rowLeft.style.cursor= "disabled";
    }
    else{
        sliderContainer.style.marginLeft= stringVal+'%';
    
    }
    
     }
)  
    
arrowLeft.addEventListener('click', () => {
    console.log(marginLeftVal)
    let leftNum =  marginLeftVal+100;
    marginLeftVal = leftNum
    console.log(marginLeftVal)
    sliderContainer.style.marginLeft= marginLeftVal+100+'%';
    
  })