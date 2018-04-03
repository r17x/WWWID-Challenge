// Original From : https://gist.github.com/mathewbyrne/1280286#gistcomment-1606270
const toSlug = text => {
    return text.toString().toLowerCase()
        .replace(/\s+/g, '-')
        .replace(/&/g, '-and-') 
        .replace(/[^\w/\\-]+/g, '')
        .replace(/\/-\/-+/g, '-')
        .replace(/\x2f/, '-') // change from / to - 
}

export default toSlug
