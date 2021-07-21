class Video {
    constructor(title, uploader, time){
        this.title = title;
        this.uploader = uploader;
        this.time = time;
    }
    whatch(){
        console.log(`${this.uploader} watched all ${this.time} of ${this.title}`)

    }
}
const movie1 = new Video("Star Wars", "George Lucas", "2:08 hours")
movie1.whatch()
const movie2 = new Video("Fast & Furious", "THE FAMILY", "1:55 hours")
movie2.whatch()
const movie3 = new Video("Indiana Jones", "Jaimito", "1:35 hours")
movie3.whatch()
const movie4 = new Video("Spider-man", "Dani Kahuna", "2:27 hours")
movie4.whatch()
const movie5 = new Video("Avengers", "Pepe Lopez", "1:51 hours")
movie5.whatch()

let repository = [movie1, movie2, movie3, movie4, movie5 ]
console.table(repository)