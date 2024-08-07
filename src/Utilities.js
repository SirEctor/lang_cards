import Papa from 'papaparse';

export async function getDataFromCSV(filePath, variableFunc, letterFamily='all'){
    const resp = await fetch(filePath);
    const reader = resp.body.getReader();
    const result = await reader.read();
    const d = new TextDecoder('utf-8');
    const csv = d.decode(result.value);

    const results = Papa.parse(csv, {header: true});
    const rows = results.data;
    
    console.log(filePath);

    if(letterFamily === 'all'){
        variableFunc(rows);
    }else{
        let chosenRows = [];
        for(let i = 0; i < rows.length; i++){
            if(rows[i]['lang-family'] === letterFamily){
                chosenRows.push(rows[i])
            }
        }
        variableFunc(chosenRows);
    }


    
}




export function filterTheArray(letterFamilies, keyInQuestion){
    let keysSeen = [];
    let storage = [];
    console.log("letterFams")
    console.log(letterFamilies)
    console.log("keyinquestion")
    console.log(keyInQuestion)
    
    for(let i = 0; i < letterFamilies.length; i++){
        let letterFam = letterFamilies[i];
        
        if (!(keysSeen.includes(letterFam[keyInQuestion]))){
            keysSeen.push(letterFam[keyInQuestion])
            storage.push(letterFam)
        }
    }

    console.log("keySeen")
    console.log(keysSeen);
    console.log("storage")
    console.log(storage);

    return(storage);
}