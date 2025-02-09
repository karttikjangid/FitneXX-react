// async function getFitnessData(endpoint) {
//     const url = `https://api.gemini.com/v1/fitness/${endpoint}`;
    
//     try {
//         const response = await fetch(url, {
//             method: 'GET',
//             headers: {
//                 'Authorization': `Bearer ${AIzaSyAdatd1AFZXSJZy45UgeAI3HxRDRYsvDHY}`,
//                 'Content-Type': 'application/json'
//             }
//         });

//         const data = await response.json();
//         console.log(`Fetched ${endpoint} Data:`, data);
//         return data;

//     } catch (error) {
//         console.error(`Error fetching ${endpoint}:`, error);
//     }
// }

const { GoogleGenerativeAI } = require("@google/generative-ai");
// const dotenv = require("dotenv");
// dotenv.config();
 
const genAI= new GoogleGenerativeAI("AIzaSyAdatd1AFZXSJZy45UgeAI3HxRDRYsvDHY");

async function run(){
    const model =genAI.getGenerativeModel({model:"gemini-1.5-flash"})
    const prompt ="Write a story about a magic backpack";
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    // const text = result.candidates[0].content.parts[0].text;

    console.log(text);
}

run().catch(console.error);


