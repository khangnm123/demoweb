var checkbox_toggle = document.getElementById('light')
checkbox_toggle.addEventListener('change' , function(){
    //thêm class dark
   document.body.classList.toggle('dark')//toggle kiểm trả thử có class không 
    let h2 =document.querySelector('h2')
   h2.style.color= white;
}); 
