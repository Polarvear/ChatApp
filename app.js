//npm install -g nodemon 바뀔떄마다 ctrl c 하고 재실행 안해줘도 됨


const express = require("express")
const http = require("http")
const app = express(); //1) express 를 구현한 app이
const path = require("path") //2) 경로를 통해서
const server = http.createServer(app) //3) 실행할 수 있도록
const socketIO = require("socket.io")


const io = socketIO(server);

//console.log(__dirname)현재 경로 알려줌 join을 쓴 이유는 운영 체제마다 /, \가 다르기 때문에
app.use(express.static(path.join(__dirname, "src"))) // 경로 설정과 자세히 알려주는 dirname 추가

const PORT = process.env.PORT || 5000; //지정된 포트번호가 있으면 사용하거나 아니면 5000번 사용

server.listen(PORT, () => console.log(`sever is running ${PORT}`))

io.on("connection", (socket)=> {
    console.log("chatting",(data) => {
        console.log(data,'data 입니다.')
        io.emit("chatting", data) // 서버에 보내기 성공 내용은 클라이언트에서 처리
    })
}) // io를 들고와서 제어할 것임


