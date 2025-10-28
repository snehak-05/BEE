const express = require("express");
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}))
const Queue = require('bullmq');
let codeQueue = new Queue("code-queue", {
    connection: {
        host: "localhost",
        port: 6379,
    },
})

app.post("/api/submission", async function(req, res){
    let {qId, code, langauge} = req.body
    //offload the job to message queue, so that a worker can do the task
    let result = await codeQueue.add("code-queue",{
        qId, code, langauge
    })
    //console.log(job.id);

    res.json({
        message: "check server console"
    })

})

let worker = new Worker("codeQueue", function(job){
    let {qId, code, language} = job.data;
    setTimeout(()=>{
        console.log(
    {
        qId: qId,
        status: success,
        time: "4ms",
        beat : "tp 10%"
}
)

worker.onerror("error", funtion(err){
    console.log(err)
})


app.listen(3030, function(){
    console.log("server started")
})