import Papa from 'papaparse';

export async function getDataFromCSV(filePath, variableFunc){
    const resp = await fetch(filePath);
    const reader = resp.body.getReader();
    const result = await reader.read();
    const d = new TextDecoder('utf-8');
    const csv = d.decode(result.value);

    const results = Papa.parse(csv, {header: true});
    const rows = results.data;
    
    variableFunc(rows);
}
       
        
 
// export function nameOfLang(langCodes, lang){
//     let ret = langCodes[0]['code'];
//     console.log(langCodes)
//     console.log(lang);
//     for(let i = 0; i < langCodes.length; i++){
//         console.log(langCodes[i]);
//         if(langCodes[i]['code'].toString() == lang.toString()){
//             ret = langCodes[i]['code'];
//         }
//     }

//     return(ret);
// }