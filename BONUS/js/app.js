// Wayne Barnett	Founder & CEO	wayne-barnett-founder-ceo.jpg
// Angela Caroll	Chief Editor	angela-caroll-chief-editor.jpg
// Walter Gordon	Office Manager	walter-gordon-office-manager.jpg
// Angela Lopez	Social Media Manager	angela-lopez-social-media-manager.jpg
// Scott Estrada	Developer	scott-estrada-developer.jpg
// Barbara Ramos	Graphic Designer	barbara-ramos-graphic-designer.jpg

// MILESTONE 0:
// Creare l’array di oggetti con le informazioni fornite.

let team = [
    {
        avatar: `<img src="./img/wayne-barnett-founder-ceo.jpg">`,
        firstName: 'Wayne',
        lastName: 'Barnet',
        role: 'Founder & CEO',
    },
    {
        avatar: `<img src="./img/angela-caroll-chief-editor.jpg">`,
        firstName: 'Angela',
        lastName: 'Caroll',
        role: 'Chief Editor',
    },
    {
        avatar: `<img src="./img/walter-gordon-office-manager.jpg">`,
        firstName: 'Walter',
        lastName: 'Gordon',
        role: 'Office Manager',
    },
    {
        avatar: `<img src="./img/angela-lopez-social-media-manager.jpg">`,
        firstName: 'Angela',
        lastName: 'Lopez',
        role: 'Social Media Manager',
    },
    {
        avatar: `<img src="./img/scott-estrada-developer.jpg">`,
        firstName: 'Scott',
        lastName: 'Estrada',
        role: 'Developer',
    },
    {
        avatar: `<img src="./img/barbara-ramos-graphic-designer.jpg">`,
        firstName: 'Barbara',
        lastName: 'Ramos',
        role: 'Founder & CEO',
    }
]

// MILESTONE 1:
// Stampare su console, per ogni membro del team,
//  le informazioni di nome, ruolo e la stringa della foto
//  (in questo fase usiamo il ciclo for…in )

const divElement = document.getElementById('div-element')

// for (let i = 0; i < team.length; i++) {
//     for (let key in team[i]) {
//         console.log(team[i][key])
//         // MILESTONE 2:
//         // Stampare le stesse informazioni su DOM sotto forma di stringhe
//         divElement.innerHTML += `<div>${team[i][key]}</div>`
//     }
// }

// BONUS 1:
// Trasformare la stringa foto in una immagine effettiva


// BONUS 2:
// Organizzare i singoli membri in card/schede
//  (trovato un esempio allegato, ma siete liberi di gestire
//  la grafica a vostro piacimento)

let card = `<div class="card"></div>`

for (let i = 0; i < team.length; i++) {
    divElement.innerHTML += `<div class="card"></div>`
}

const cardElements = document.querySelectorAll('.card')

for (let i = 0; i < team.length; i++) {
    for (let key in team[i]) {
        console.log(team[i][key])
        cardElements[i].innerHTML += `<div class="info">${team[i][key]}</div>`
    }
}


