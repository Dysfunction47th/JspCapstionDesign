



// # 비동기 방식 AJAX 요청

// 1. XMLHttpRequest 객체 생성
const request = new XMLHttpRequest;

// 2. 요청 초기화
request.open('get' , "http://127.0.0.1:5500/mainpage.html" , true)

// 3. 요청 전송
request.send()

// 4. onreadystatechage 이벤트리스너 등록
request.onreadystatechange = function(event) {
    if (request.readyState = 4 && request.status == 200) {
        // 응답받은 데이터 체크
        const responseData = request.responseText;
    }
}

console.log(responseData);