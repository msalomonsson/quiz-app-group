class Data {

    static getJokes(difficultyValue){
        var fetchData = fetch(`https://opentdb.com/api.php?amount=5&difficulty=${difficultyValue}&type=multiple`)
        .then(res => res.json())
        return fetchData
    }


}

export default Data