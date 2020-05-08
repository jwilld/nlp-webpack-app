function urlCheck(url) {
    console.log("::: Running URL Check :::", url);
    
    let urlValid = url.match(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g);

    return urlValid ? true : false
}

export { urlCheck }
