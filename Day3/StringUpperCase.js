const StringArray = ["Apple","mango","pineapple"];

for(let e=0;e<StringArray.length;e++){
    console.log(StringArray[e].toUpperCase());
};


/// alternatively , using for each
StringArray.forEach(element =>{
    console.log(element.toUpperCase())
});


const uppercaseArray = StringArray.map(element => element.toUpperCase());
console.log(uppercaseArray);