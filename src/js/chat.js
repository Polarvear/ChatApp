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
    li.innerText = `${data.name}님이 - ${data.msg}` // 탬플릿 문법 사용
    chatList.appendChild(li)
})

console.log(socket)