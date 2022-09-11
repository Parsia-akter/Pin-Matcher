function getPin()
{
    const num=Math.round(Math.random()*100000);
    
    if((num+'').length==5)
    {
        return num;
    }
    else{
       return getPin()
        
    }
}
document.getElementById('generate-pin-btn').addEventListener('click',function()
{
    const num=getPin()
   const display= document.getElementById('generate-pin-display')
   display.value=num;
})

document.getElementById('key-pad').addEventListener('click',function(event)
{
    const keyDisplay= document.getElementById('keypad-display')
    if(isNaN(event.target.innerText))
    { 
        if(event.target.innerText=='C')
        {    
            keyDisplay.value=''
        }
        else if(event.target.innerText=='<')
        {
            keyDisplay.value=Math.floor(keyDisplay.value/10) 
        }
   }
   else
   {

    keyDisplay.value= keyDisplay.value + event.target.innerText

   }
    
})

document.getElementById('submit').addEventListener('click',function()
{
    const keyDisplay= document.getElementById('keypad-display').value
    const display= document.getElementById('generate-pin-display').value
    const success=document.getElementById('success')
    const failed=document.getElementById('failed')
    if(keyDisplay==display)
    {
      success.style.display='block'
      failed.style.display='none'
    }
    else{   
        failed.style.display='block'
        success.style.display='none'
    }
})