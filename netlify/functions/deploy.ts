import { schedule } from "@netlify/functions";


export const handler= schedule("*/30 * * * *",async (event:any)=>{
    console.log("Well Done!!");
    

    return {
        statusCode:200,
        body:"Hello !!!"
    };
});