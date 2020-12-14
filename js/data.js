class Data {

    static getJokes(){
        var fetchData = fetch('https://opentdb.com/api.php?amount=10&difficulty=easy&type=multiple')
        .then(res => res.json())
        return fetchData
    }


}

export default Data