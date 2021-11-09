function shewley(){
    // Récupération de la div "description" dans une variable
    let div = document.getElementById('description')

    // attribution du texte dans les balises <h4> et <p>
    document.getElementById('titre-projet').innerHTML = 'Bot Discord :'
    document.getElementById('infos').innerHTML = "Le bot Shewley est un bot Discord codé en JavaScript et tournant sur l'environnement Node JS. <br><br> Ce bot permet, par exemple, de pouvoir de pouvoir jouer de la musique venant de Youtube dans un channel vocal (en utilisant un package nommé YT-Core), ou bien encore de pouvoir lookup (date de création du compte, identifiant, photo de profil) un membre du serveur Discord à l'aide d'une seule commande! <br><br> Toutes les fonctionnalités du bot sont listées sur le repo du bot, qui est sur mon GitHub."

    // Affichage de la div "description"
    div.style.display = "block"

}

function hypixel(){
    // Récupération de la div "description" dans une variable
    let div = document.getElementById('description')

    // attribution du texte dans les balises <h4> et <p>
    document.getElementById('titre-projet').innerHTML = 'Hypixel Location Tracker :'
    document.getElementById('infos').innerHTML = `Le logiciel "Hypixel Location Tracker" a été codé en C# à l'aide de Visual Studio. Ce logiciel permet de pouvoir avoir l'emplacement sur la carte d'un joueur Minecraft connécté sur le serveur Skyblock d'Hypixel. <br> <br> Pour arriver à ce résultat 2 APIs ont été nécessaires : l'API de Mojang pour récupérer l'UUID à partir du pseudo et l'API d'Hypixel pour avoir l'emplacement du joueur à partir de son UUID (récupéré précedement grâce à l'API de Mojang)`

    // Affichage de la div "description"
    div.style.display = "block"

}

function martin(){
    // Récupération de la div "description" dans une variable
    let div = document.getElementById('description')

    // attribution du texte dans les balises <h4> et <p>
    document.getElementById('titre-projet').innerHTML = "Logiciel de gestion d'absence scolaire"
    document.getElementById('infos').innerHTML = `Ce logiciel, codé en C#, permet d'enregistrer et gérer les absences de chaque élève, de le stocker dans une base de données, pour pouvoir ensuite les ressortir à l'aide du logiciel.`

    // Affichage de la div "description"
    div.style.display = "block"

    //scroll
    // document.getElementById('div').scrollIntoView();
}
