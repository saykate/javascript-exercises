const getTheTitles = (books) => {
    let titles = []
    books.forEach(book => {
        return titles.push(book.title)
    });
    console.log(titles)
    return titles
};

// Do not edit below this line
module.exports = getTheTitles;
