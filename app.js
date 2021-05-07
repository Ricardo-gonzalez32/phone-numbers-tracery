let sentences = []
function generate() {
    var data = {
    	"start": ["#FN# #LN#: #AreaC#  #N##N##N#-#N##N##N##N#" ],
        "FN" : ["Angel" , "Christopher", "Sebasti\u00E1n" , "Liam", "Ian","Dylan","Mateo","Thiago","Lucas","Adri\u00E1n","Noah","Mat\u00EDas","Valentina","Victoria","Emma","Mia","Amaia","Isabella","Mikaela","Ainhoa","Amanda","Luna"],
        "LN" : ["Berrios" , "Zantana" , "Rivera" , "Romero" , "Cuadrado" , "Noble", "Diaz"],
        "AreaC" : ["(787)" , "(939)"],
        "N" : ['1', '2', '3' ,'4' ,'5', '6', '7', '8', '9' ]
    }
    
    let grammar = tracery.createGrammar(data);
    let expansion = grammar.flatten('#start#');

    sentences.push(expansion);

    printSentences(sentences);
}

function printSentences(sentences) {
    let textBox = document.getElementById("sentences");
    textBox.innerHTML = "";
    for(let i=sentences.length-1; i>=0; i--) {
        textBox.innerHTML += "<p>"+sentences[i]+"</p>"
    }
}
