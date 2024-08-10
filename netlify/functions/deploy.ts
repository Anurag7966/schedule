
import { schedule } from "@netlify/functions";
import axios from "axios";
export const handler= schedule("*/5 * * * *",async (event:any)=>{
    // console.log("Well Done!!");
    
    try {
        const response=await axios.get("https://main--tangerine-bombolone-d7b594.netlify.app/api/checker")
        const a=JSON.stringify(response.data);
        console.log(a);
        
        return {
            statusCode: 200,
            body:a
            
            
        };
    } catch (error) {
        console.error('Error:', error);
        return {
            statusCode: 500,
            body: 'Internal Server Error',
        };
    }
});