// $(document).ready(function(){
//     $(window).scroll(function(){

//         let  positiontop = $(document).scrollTop()
//         console.log(positiontop)
//         if ((positiontop > 500) && ( positiontop < 1000) ){
//             $('.navbar').addClass('sticky_header')
//         }
//     })
// })

   const body = document.body
   let lastScroll = 0
   window.addEventListener('scroll', () => {
   
   const  currentScroll = window.pageYOffset

// when user scroll in the top 0px then apply  this method
   if (currentScroll <= 0) {
      body.classList.remove('scroll_up')
       
   }
//    when user scroll down then add scroll_down class
   if (currentScroll > lastScroll && !body.classList.contains('scroll_down')) {
       body.classList.remove('scroll_up')
       body.classList.add('scroll_down')
   }
//    when user scroll up and remove scroll_down and add scroll_up class
   if (currentScroll < lastScroll && body.classList.contains('scroll_down')) {
    body.classList.remove('scroll_down')
    body.classList.add('scroll_up')
   }

   lastScroll = currentScroll



 })