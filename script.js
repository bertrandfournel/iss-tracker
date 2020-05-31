window.onload = () => {

    

    const url = 'http://api.open-notify.org/iss-now.json'
    
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


    getData().then((res)=>{

        let latitude = parseFloat(res.iss_position.latitude)
        let longitude = parseFloat(res.iss_position.longitude)
        
        var map = L.map('issMap').setView([latitude, longitude], 1.5);
        
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);

        L.marker([latitude, longitude],{icon:issIcon}).addTo(map)
            
        
    })

}