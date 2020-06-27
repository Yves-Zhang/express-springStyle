const LogMiddleWare = (req, res, next) => {
    console.log("有消息来了！！！")
    next()
}

export default LogMiddleWare