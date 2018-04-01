// Original From : https://gist.github.com/mathewbyrne/1280286#gistcomment-1606270
function toSlug(text){
    return text.toString().toLowerCase()
        .replace(/\s+/g, '-')
        .replace(/&/g, '-and-') 
        .replace(/[^\w\-]+/g, '')
        .replace(/\-\-+/g, '-');
}
module.exports = toSlug;
