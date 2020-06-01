window.onload = () => {

    

    const url = 'https://api.wheretheiss.at/v1/satellites/25544'
    
    // Je définis ici l'icône qui représentera l'iss
    var issIcon = L.icon({
        iconUrl: 'iss.png',
        iconSize: [30,30],
    })

    // Nous allons recupérer les données dans cette fonction
    async function getData(){
        const data = await fetch(url)
        const response = await data.json()
        return response
    }

    // Dès que les données sont récupérées on affiche une carte en plaçant l'icône de l'ISS
    getData().then((res)=>{
        
        var map = L.map('issMap').setView([res.latitude, res.longitude], 1.5);

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);

        L.marker([res.latitude, res.longitude],{icon:issIcon}).addTo(map)
            
        
    })

}