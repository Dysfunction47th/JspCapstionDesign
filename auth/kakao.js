//  kakao auth response callback 

// 카카오 로그인 유저 토큰 받아오기 (로그인 api _ access Token , refreshToken, expire ) _ JWT 토큰 교환방식 
// 발급받은 토큰으로 유저 프로필 조회 ( api ) _  카카오가 유저 토큰 확인하고, 허가된 혹은 사용가능한 토큰이면 유저 프로필 줌. _ JSON ,XML, 고유값(ID), 유저이름, 유저닉네임, 유저이메일. 
import React, { useEffect } from "react";
import axios from 'axios';
import qs from  "qs";


import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { useNavigate } from "react-router-dom";



import  Mainpage  from "../components/Mainpage";





function Kakao() {
    const CLIENT_ID = "b25d6249bc425acccd1f9a1ccf78a06e";
    // console.log("KAKAOAAAA");

    const params = new URL(document.location.toString()).searchParams;
    const code = params.get("code"); // 인가코드 받는 부분
    const grant_type = "authorization_code";
    const client_id = CLIENT_ID ;
    

    

    const userInfoUrl = "https://kapi.kakao.com/v2/user/me";

    var baseURL = "https://kauth.kakao.com/oauth/token"
    
   
    

    const navigate = useNavigate();

    // function avd(inputRouteCondtion) {
    //     let routeCondtion = inputRouteCondtion;

    //     if (routeCondtion == true) {
    //         window.location.href = "src/components/Mainpage.js";         
    //         // navigate("src/components/mainpage.js");
    //     }
    //     // window.location.href = "src/components/Mainpage.js";         
    //     // navigate("src/components/mainpage.js");
    // }


    const payload = qs.stringify({
        grant_type: "authorization_code",
        client_id: client_id,
        redirect_uri:"http://localhost:3000/auth/kakao",
        code: code
        // 이것들은 kakao 측에서 정해준 형식이므로 key값은 꼭 똑같이 써야합니다!
      });



    axios.post(baseURL,payload,
        {
            headers: { 
                "Content-Type": "application/x-www-form-urlencoded;charset=utf-8"
            },

        }).then(res => {
            console.log(res);
             
            // console.log(config);


            axios.get(userInfoUrl , { 
                        headers: {
                            Authorization: `Bearer ${res.data.access_token}`
                        }
                    }
                ).then(resUserInfo =>{
                        console.log(resUserInfo);
                        // document.write("id : " + resUserInfo.data.id);
                        // document.write("<br>");
                        // document.write("date :" + resUserInfo.data.connected_at);
                        // document.write("<br>");
                        // document.write(resUserInfo.data.kakao_account.profile.nickname)
                        
                        localStorage.setItem('user_id', resUserInfo.data.id);
                        localStorage.setItem('user_date', resUserInfo.data.connected_at);
                        localStorage.setItem('nickname', resUserInfo.data.kakao_account.profile.nickname);
                        

                        sessionStorage.setItem('user_id', resUserInfo.data.id);
                        sessionStorage.setItem('user_date', resUserInfo.data.connected_at);
                        sessionStorage.setItem('nickname', resUserInfo.data.kakao_account.profile.nickname);



                        // const user_date = {
                        //     id: resUserInfo.data.id ,
                        //     date: resUserInfo.data.connected_at    ,  
                        //     nickname:resUserInfo.data.kakao_account.profile.nickname
                        
                        // };
                  
                        // axios.post("src/components/mainpage.js" , user_date).then(function (response) {
                            
                        // })

                            
                        
                        window.location.href = "src/components/Mainpage.js";
                        // window.location.href = "src/App.js";
                        
                        // window.location.href = <Mainpage/>;
                        
                                                  
                    })

                    

                    // avd(1);
                    // navigate("src/components/mainpage.js");

        });

        // window.location.href = "src/components/index.html";
        
        // navigate("../components/Mainpage" , {replace: true});

        

 
    // }, [])
    


    return (
        <div>
            
            <Mainpage/>

            <BrowserRouter>
                <Routes>
                    <Route path="/src/components/Mainpage.js" element={<Mainpage/>} ></Route>


                </Routes>
            </BrowserRouter>




        </div>

        

    );
    

}

    
    

export default Kakao;



