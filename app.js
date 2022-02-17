const express = require("express")
const app = express();
const path = require("path")


app.use(express.static(path.join(__dirname, "public"))) // 경로 설정과 자세히 알려주는 dirname 추가