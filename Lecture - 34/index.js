import {createClient} from "redis";

const client = await createClient();

client.connect()
client.on("error", function(err){
    console.log(err)
})

async function cacheUserProfile(){
    await client.set("user:2", JSON.stringify({name:"snehakkk", age:"19"}));
}

async function readProfile(){
    let data = await client.get("user:2")
    return data;
}
cacheUserProfile()
.then(()=>console.log("profile cached!"))