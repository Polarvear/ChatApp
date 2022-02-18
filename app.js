//npm install -g nodemon 바뀔떄마다 ctrl c 하고 재실행 안해줘도 됨


const express = require("express")
const app = express();
const path = require("path")

console.log("Hello")

//console.log(__dirname)현재 경로 알려줌 join을 쓴 이유는 운영 체제마다 /, \가 다르기 때문에
app.use(express.static(path.join(__dirname, "src"))) // 경로 설정과 자세히 알려주는 dirname 추가

const PORT = process.env.PORT || 5000; //지정된 포트번호가 있으면 사용하거나 아니면 5000번 사용

app.listen(PORT, () => console.log(`sever is running ${PORT}`))