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
        firstName: 'Wayne',
        lastName: 'Barnet',
        role: 'Founder & CEO',
        avatar: `wayne-barnett-founder-ceo.jpg`
    },
    {
        firstName: 'Angela',
        lastName: 'Caroll',
        role: 'Chief Editor',
        avatar: `angela-caroll-chief-editor.jpg`
    },
    {
        firstName: 'Walter',
        lastName: 'Gordon',
        role: 'Office Manager',
        avatar: `walter-gordon-office-manager.jpg`
    },
    {
        firstName: 'Angela',
        lastName: 'Lopez',
        role: 'Social Media Manager',
        avatar: `angela-lopez-social-media-manager.jpg`
    },
    {
        firstName: 'Scott',
        lastName: 'Estrada',
        role: 'Developer',
        avatar: `scott-estrada-developer.jpg`
    },
    {
        firstName: 'Barbara',
        lastName: 'Ramos',
        role: 'Founder & CEO',
        avatar: `barbara-ramos-graphic-designer.jpg`
    }
]

// MILESTONE 1:
// Stampare su console, per ogni membro del team,
//  le informazioni di nome, ruolo e la stringa della foto
//  (in questo fase usiamo il ciclo for…in )

const divElement = document.getElementById('div-element')

for (let i = 0; i < team.length; i++) {
    for (let key in team[i]) {
        console.log(team[i][key])
        // MILESTONE 2:
        // Stampare le stesse informazioni su DOM sotto forma di stringhe
        divElement.innerHTML += `<div>${team[i][key]}</div>`
    }
}





// BONUS 1:
// Trasformare la stringa foto in una immagine effettiva
// BONUS 2:
// Organizzare i singoli membri in card/schede
//  (trovato un esempio allegato, ma siete liberi di gestire
//  la grafica a vostro piacimento)
