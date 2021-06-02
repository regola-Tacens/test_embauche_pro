
    //calcul du nombre de lignes de textes
    const textAlias = document.getElementById('inner')
    const hauteurDuTexte = textAlias.offsetHeight
    const fontSize = window.getComputedStyle(textAlias).fontSize
    const lineHeigth = parseInt(fontSize.replace('px',''),10) * 1.12
    // textAlias.style.lineHeight = '16px'
    const nombreDeLignes = hauteurDuTexte / lineHeigth
    console.log(textAlias.style)

    // array of wor4s



fonction_question1 = ( text ) => {

    //calcul du nombre de lignes sans caractères alphanumérique
    const regex= /^[^a-zA-Z0-9]*$/
    const TextArray = text.split('\n')
    const nombreLignesInvalides = TextArray.filter(word => word.match(regex)).length
  console.log(TextArray.filter(word => word.match(regex)))

    return Math.floor(nombreDeLignes - nombreLignesInvalides)
}

fonction_question2 = (text) => {

    //calcul du nombre de lignes vides
    const regex= /^[^a-zA-Z0-9]*$/
    const TextArray = text.split('\n')
    const nombreLignesVides = TextArray.filter(word => word === '').length
    
    
    return `nombre de lignes vides : ${Math.floor(nombreLignesVides)}  -  nombre de lignes non vides : ${Math.floor(nombreDeLignes - nombreLignesVides)}  ` 
}

fonction_question3 = (text) => {

    //calcul du nombre de mots
    const regex= /^[a-zA-Z0-9éèàê || \w+\.\w+]*$/
    const TextArray = text.split(' ')
    const nombreDeMots = TextArray.filter(word=> word.match(regex)).length
    
    return nombreDeMots
    
}

fonction_question4 = (text) => {
    
        //tableau des mots
        const regex= /^[a-zA-Z0-9éèàê]+$/
        const textArray = text.split(/-|\s|'|\w+\.\w+/)
        const tableauDeMots =[...new Set(textArray.filter(word=> word.match(regex)))] 

        const motsTri = tableauDeMots.sort((a,b) => a.length - b.length)
        

        const motsTriRetourLigne = [...[motsTri[0], ", "]]

        for (i=1 ; i< motsTri.length-1; i++) {
            motsTri[i+1].length > motsTri[i].length ? motsTriRetourLigne.push(...[motsTri[i],', ', '<br/>']) : motsTriRetourLigne.push (...[motsTri[i]],', ')
        }
        
        return motsTriRetourLigne.join('').slice(0,-2)

}

fonction_questionBonus = (text) =>  text.split(/([!:;?])/).map(word => word.match(/([!:;?])/) ? " "+word  : word).join(' ')



