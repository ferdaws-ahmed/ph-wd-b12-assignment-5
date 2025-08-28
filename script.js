



//function heart count start ------>>
const getHeartIconBtn = document.querySelectorAll('.heart-icon-btn');
for(const heartBtn of getHeartIconBtn){
    heartBtn.addEventListener('click', function(){
        const getCurrentHeart = document.getElementById('heart-count');
        const currentHeart = parseInt(getCurrentHeart.innerText);

        const totalHeart = currentHeart + 1;
        getCurrentHeart.innerText = totalHeart;
        
    })
}
//function heart count end ------ !!!!!





// function call button start ---->>
const getCallBtns = document.getElementsByClassName('call-btn');
for(callBtn of getCallBtns){
    callBtn.addEventListener('click', function(){
        const title = this.parentNode.parentNode.children[2].innerText;
        const dialNumber = this.parentNode.parentNode.children[3].innerText;
        console.log(title, dialNumber)
        alert(`📞 calling ${title} ${dialNumber}...` );



        // coin count function ----->
            const callCoin = document.getElementById('call-coin');
        
           const callCoinValue = parseInt(callCoin.innerText);
            
         
        
        if(callCoinValue >= 20){
             const currentCoin = callCoinValue - 20 ;
            callCoin.innerText = currentCoin;
        }

        else{
            alert("❌You don't have enough coins to make a call.You need at least 20 coins...")
            return
        }
        
        // coin count function ----->

        
        
        
        
        const callListHeading = this.parentNode.parentNode.children[1].innerText;
        const callListSubHeading = this.parentNode.parentNode.children[2].innerText;



        const realTime = new Date();
        const timeFormate = realTime.toLocaleTimeString();
        

        const callListBox = document.getElementById('call-list-box');
        const callList = document.createElement('div');
        callList.innerHTML = `
        <div id="call-list" class="flex justify-between items-center mt-4 p-3 bg-gray-100 rounded-md">
                  <div>
                      <h1 class="font-bold text-sm ">${callListHeading}</h1>
                      <p class= "text-xs">${callListSubHeading}</p>
                  </div>
                  <div class="text-sm flex-shrink-0 ">
                     ${timeFormate}
                  </div>
               </div>
        `;
        callListBox.appendChild(callList);

        

        
       

    // function clear btn ------>>
       document.getElementById('clear-btn').addEventListener('click',function(){
        callList.remove()
        })
    // function clear btn ------>>
        
    })
}
// function call button end ---- !!!!!


