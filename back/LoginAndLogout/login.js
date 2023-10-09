

function mainMove() {
    window.location.href = "mainpage.html";
}




function login() {
        Kakao.init('9e758713051d787381dd4660a0fce536');
        console.log(Kakao.isInitialized());                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           
    
        Kakao.Auth.createLoginButton({
            container: '#kakao-login-btn',
            success: function(authObj) {
            Kakao.API.request({
                url: '/v2/user/me',
                success: function(result) {
                console.log(result);
                
                id = result.id
                connected_at = result.connected_at
                kakao_account = result.kakao_account
    
                localStorage.setItem('userId' , id)
                localStorage.setItem('connected_at' , connected_at)
                localStorage.setItem('kakao_account' , kakao_account) 
                
                
                if(typeof kakao_account != 'undefined'){
                    email = kakao_account.email;
                    gender = kakao_account.gender;
                    localStorage.setItem("email" , email)
                    localStorage.setItem("gender" , gender)
    
                }
                
                

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
    }
    