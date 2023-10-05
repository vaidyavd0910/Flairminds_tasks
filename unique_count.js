function countCharacterOccurrences(inputString) {
    const charCountMap = new Map();

    for (const char of inputString) {
       
        if (charCountMap.has(char)) {
            charCountMap.set(char, charCountMap.get(char) + 1);
        } else {
           
            charCountMap.set(char, 1);
        }
    }

    
    charCountMap.forEach((count, char) => {
        console.log(`Character '${char}' occurs ${count} times`);
    });
}

const inputString = "hello world";
countCharacterOccurrences(inputString);
