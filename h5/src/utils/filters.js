//过滤器

let readMore=(text, length, suffix)=>{
    return text.substring(0, length) + suffix
}
let titlereg=(text, length)=>{
    return text.substring(0, length).replace(new RegExp(" ", "gm"), "-")
}




export {readMore,titlereg}