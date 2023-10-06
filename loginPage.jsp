<!doctype html>
<html lang="ko">
<head>
<script src="https://developers.kakao.com/sdk/js/kakao.min.js"></script>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>


</head>

<script>
  // **참고** css가 완성되지 않아 보기가 안좋음 따라 css를 완성하기 전까지 모든것은 프로토 타입이기에 
  // 감안하고 보아야 함 
  function mainMove() {
    window.location.href = "mainpage.html";
  }
  
  function testMove() {
    window.location.href = "test.html";
  }
  
</script>


<body>
	<a id="kakao-login-btn">
   
  </a>
  
	<button class="api-btn" onclick="unlinkApp()">로그아웃하기</button>

	<div id="result"></div>



  
<script type="text/javascript">
/// logout code 
  function unlinkApp() {
    Kakao.API.request({
      url: '/v1/user/unlink',
      success: function(res) {
        console.log(res);
        alert('success: ' + JSON.stringify(res))

      },
      fail: function(err) {
        alert('fail: ' + JSON.stringify(err))
      },
    })
    
    localStorage.clear()
    ///  this code use a mainpage therfore if mainpage will complete , moving complet mainpage and this code delete   

  }
</script>

<script type="text/javascript">
Kakao.init('9e758713051d787381dd4660a0fce536');
console.log(Kakao.isInitialized());                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           

  Kakao.Auth.createLoginButton({
    container: '#kakao-login-btn',
    success: function(authObj) {
      Kakao.API.request({
        url: '/v2/user/me',
        success: function(result) {
          console.log(result);
          $('#result').append(result);
          id = result.id
          connected_at = result.connected_at
          kakao_account = result.kakao_account

          localStorage.setItem('userId' , id)
          localStorage.setItem('connected_at' , connected_at)
          localStorage.setItem('kakao_account' , kakao_account) 
          
          $('#result').append(kakao_account);
          resultdiv = `<h2> 로그인 성공 !!`
          resultdiv += `<h4> id: ${localStorage.getItem('userId')}  <h4>`
          resultdiv += ` <h4>connected_at: ${localStorage.getItem('connected_at')}  <h4> `
          email ="";
          gender = "";
  
          if(typeof kakao_account != 'undefined'){
        	  email = kakao_account.email;
        	  gender = kakao_account.gender;
            localStorage.setItem("email" , email)
            localStorage.setItem("gender" , gender)

          }
          resultdiv += ` <h4>email: ${localStorage.getItem('email')}  <h4>`
          resultdiv += ` <h4>gender: ${localStorage.getItem('gender')} <h4>`
            
          $('#result').append(resultdiv);

          mainMove()
          //testMove()
          
        },
        fail: function(error) {
          alert(
            'login success, but failed to request user information: ' +
              JSON.stringify(error)
          )
        },
      })
    },
    fail: function(err) {
      alert('failed to login: ' + JSON.stringify(err))
    },
  })



  


</script>



</body>
</html>
