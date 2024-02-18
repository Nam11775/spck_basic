function login() {
   const username = document.getElementById('username').value;
   const password = document.getElementById('password').value;

   if (username && password) {
       alert('Login successful!');
       window.location="http://127.0.0.1:5500/profile/spck/spck2.html";
   } else {
       alert('Please enter a valid username and password!');
   }
}
function dangnhap(){
    window.location="http://127.0.0.1:5500/profile/spck/spck.html";
}