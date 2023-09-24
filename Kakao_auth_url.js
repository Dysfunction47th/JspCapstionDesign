
// const KAKA0_CLIENT_ID = `${process.env.REACT_APP_KAKA0_CLIENT_ID}`;
// const KAKAO_REDIRECT_URI =  `${process.env.REACT_APP_REDIRECT_URI}`;


const KAKAO_CLIENT_ID = "b25d6249bc425acccd1f9a1ccf78a06e";
const KAKAO_REDIRECT_URI =  "http://localhost:3000/auth/kakao";

// 프런트엔드 리다이랙트 URI 예시
// const REDIRECT_URI =  "http://localhost:3000/oauth/callback/kakao";

// 백엔드 리다이랙트 URI 예시
// const REDIRECT_URI =  "http://localhost:5000/kakao/code";



export const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${KAKAO_CLIENT_ID}&redirect_uri=${KAKAO_REDIRECT_URI}&response_type=code`;
// export const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${KAKA0_CLIENT_ID}&redirect_uri=${KAKAO_REDIRECT_URI}&response_type=code`;



// 인가 코드 추출

