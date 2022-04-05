"use strict"

const socket = io();

const nickname = document.querySelector("#nickname")
const chatList = document.querySelector(".chatting-list")
const chatInput = document.querySelector(".chatting-input")
const sendButton = document.querySelector(".send-button")

sendButton.addEventListener("click", (e) => {
    const param = {
        name: nickname.value,
        msg: chatInput.value,


    }
    socket.emit("chatting", "param")
},false)



socket.on("chatting", (data)=>{
    const li = document.createElement('li')
    li.innerTextt = `${data.name}님이 - ${data.msg}` // 탬플릿 문법 사용
    chatList.appendChild(li)
})

function LiMode(name, msg, time) {
    this.name = name
    this.msg = msg
    this.time = time

    this.makeLi = () => {
        const li = document.createElement("li")
        const dom = ``
    }
}