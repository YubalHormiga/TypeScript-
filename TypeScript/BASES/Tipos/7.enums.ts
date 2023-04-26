(()=>{

    enum AudioLevel {
        min = 1,
        medium,
        max = 10
       }

    let currentAudio = AudioLevel.medium
    console.log(currentAudio)// dará 2
    console.log(AudioLevel)

})()