let words = ['JavaScript','ReactJs','Swift','C++'];
function arrWords(lang){
    let str = words.join(',') + ',' + lang
    console.log(str.split(','));
}
arrWords('TypeScript')