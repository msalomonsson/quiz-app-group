class Data {

    static async getJokes(){
        let fetchData = await fetch('https://opentdb.com/api.php?amount=10&difficulty=easy&type=multiple')
        const data = await fetchData.json();
        
        return data
    }


}



export default Data