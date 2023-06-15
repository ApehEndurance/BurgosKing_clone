var offer1 = document.getElementById('offer1');
var offer2 = document.getElementById('offer2');
var offerImg = document.getElementById('offer-img');
var offerText = document.getElementById('offer-h2');


offer1.addEventListener('click', function(){
    offerImg.style.backgroundImage='url(/IMG/order1.jpeg)'
    offerImg.style.objectFit='contain'
    offerImg.style.backgroundRepeat='no-repeat'
    offerText.innerHTML='BOGOF DEAL'

})

offer2.addEventListener('click', function(){
    offerImg.style.backgroundImage='url(/IMG/order1.jpeg)'
    offerImg.style.objectFit='contain'
    offerImg.style.backgroundRepeat='no-repeat'
    offerText.innerHTML='BUGOS MEAL DEAL'
})



