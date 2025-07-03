
 const adjectives = ["Funky", "Loud", "Silent", "Electric", "Wicked", "Groovy"];

 const nouns = ["Penguins", "Wizards", "Socks", "Robots", "Bananas", "Crows"];



 function getAdjective() {
    const randomindex = Math.floor(Math.random() * adjectives.length);
    const randomadjective = adjectives[randomindex];
console.log(randomadjective);
    return randomadjective;



 }
 getAdjective();

 // TODO: return a random adjective from the adjectives arra}






 function getNoun() {
    const randomindex = Math.floor(Math.random() * nouns.length);
    const randomnoun = nouns[randomindex];
    console.log(randomnoun);
    return randomnoun;

    
 // TODO: return a random noun from the nouns array

 }
 getNoun();


 function generateBandName() {
    const adjective = getAdjective();
    const noun = getNoun();

    // Combine the adjective and noun to form the band name
    const bandName = `The ${adjective} ${noun}`;

    // Update the DOM to show the band name inside #band-name
    document.getElementById("band-name").textContent = bandName;
return bandName;
 // TODO: use getAdjective() and getNoun() to build a band name

 // Format: "The Adjective Noun"

 // Then update the DOM to show the band name inside #band-name

 }
console.log(generateBandName());


 //button
// const generateNamebutton = document.getElementById("generateNamebutton");

// function handleclick() {
//    return bandName;

// }
 
// generateNamebutton.addEventListener("click,handleClick");
  