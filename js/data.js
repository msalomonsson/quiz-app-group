class Data {

    static getJokes(){
        var fetchData = fetch('https://opentdb.com/api.php?amount=10&difficulty=easy&type=multiple')
        .then(res => res.json())
        .then(data => console.log(data))
    }


}

export default Data