function matchpairs(str: string){
    const stack = [];
    
    const bracketpairs = {
        '{':'}',
        '(':')',
        '[':']'
    }
    const openbrackets = new Set(['{', '(', '[']);
    for(const char of str){
        if(openbrackets.has(char)){
        stack.push(bracketpairs[char as keyof typeof bracketpairs]);
        console.log(char + " : " + bracketpairs[char as keyof typeof bracketpairs]);
        
    }else if(Object.values(bracketpairs).includes(char)){
        const expectedcloser= stack.pop();
        if(expectedcloser!==char){
            return false;
        }
    }
}
    return stack.length===0;
}

console.log(`String '{([])}': ${matchpairs('{([])}')}`); // Output: String '{([])}': true
console.log(`String '{([]}': ${matchpairs('{([]}')}`); // Output: String '{([]}': false
console.log(`String '{[}]': ${matchpairs('{[}]')}`);   // Output: String '{[}]': false
console.log(`String '{([])}(': ${matchpairs('{([])}(')}`);
console.log(`"test(string)" is balanced: ${matchpairs("test(string)")}`); // true