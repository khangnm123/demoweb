let options =document.querySelectorAll('.changeType');
let form =document.getElementById('list');
let bgactive =document.getElementById('bg-active');
var rotatedeg =0;

options.forEach(val => {
    val.addEventListener('click' , function(even){
        // if(this.classList.contains('active')){
        //     return ;
        // }
        form.classList.remove('login');
        form.classList.remove('Register');
        form.classList.add(this.id);
        bgactive.style.left = this.offsetLeft +"px" ;
        options.forEach(item =>{
            item.classList.remove('active');
        });
        this.classList.add('active');
        rotatedeg= rotatedeg + 200;
        document.getElementById('rotate').style.transform ='translate(-50%) rotate(' + rotatedeg +'deg)';
    });
});

function signup(e){
    event.preventDefault();
    var username =document.getElementById('username').value;
    var passsword =document.getElementById('password').value;
    var user ={
        username: username,
        passsword: passsword,
    }
    var json =JSON.stringify(user);
    localStorage.setItem(username,json);
    alert("đăng ký thành công");

}
function login(e){
    event.preventDefault();
    var username =document.getElementById('username').value;
    var passsword =document.getElementById('password').value;
    var user =localStorage.getItem(username);
    var data =JSON.parse(user);
    if(user == null){
        alert("vui lòng nhập username ")
    }
    else if(username == data.username && passsword == data.passsword){
        alert("đăng nhập thành công")
        window.location.href="../doan/index.html";
    }
    else
    {
        alert("đăng nhập thất bại");
    }
}