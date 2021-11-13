// Iteration 1: Names and Input
console.log("I'm ready!");
let hacker1='Alex'
let hacker2='Quaresma'
console.log(`"The driver's name is ${hacker1}"`)
console.log(`"The navigator's name is  ${hacker2}"`)

// Iteration 2: Conditionals

if (hacker1.length>hacker2.length){

    console.log(`"The driver has the longest name, it has ${hacker1.length} characters"`)

 } else if (hacker1.length<hacker2.length){

    console.log(`"It seems that the navigator has the longest name, it has ${hacker2.length} characters"`)

} else {

    console.log(`"Wow, you both have equally long names ${hacker1.length||hacker2.length} characters"`)
}


// Iteration 3: Loops

console.log(hacker1.toUpperCase().split('').join(' '))   //space and in capitals

console.log(hacker2.split('').reverse().join(''))       //reverse order

if (hacker1.localeCompare(hacker2)=== -1){

    console.log("The driver's name goes first.")

}else if (hacker1.localeCompare(hacker2)=== 1){

    console.log("Yo, the navigator goes first definitely.")

}else{

    console.log("What?! You both have the same name?") 
}


//Bonus 1

const paragraph = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas fermentum sed neque in dapibus. Vivamus in venenatis elit. Donec dignissim varius turpis, sit amet ullamcorper diam semper non. Nunc feugiat pharetra nisi quis faucibus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Proin mollis id metus vel ornare. Pellentesque dignissim, justo sed pharetra hendrerit, nulla orci venenatis leo, non suscipit erat nisl nec justo. Nam scelerisque aliquam sem. Vestibulum a feugiat augue, in laoreet libero.

Suspendisse quam nisi, facilisis id lorem ullamcorper, bibendum fermentum nibh. Nam finibus sed est at fermentum. Proin ullamcorper, nulla ut euismod vestibulum, ipsum magna malesuada urna, cursus blandit velit ligula et justo. Curabitur leo nunc, scelerisque ac luctus non, sagittis id leo. Quisque auctor luctus elit non posuere. Vivamus porttitor turpis vel nibh maximus pharetra. Nulla a felis purus. Quisque lobortis purus in nulla finibus, at mollis leo tempus. Duis in enim efficitur nisl accumsan tempor. Maecenas eget lorem pellentesque, varius dolor ut, molestie turpis. Sed pellentesque ut sapien id suscipit. Ut mollis auctor sem, vel ornare lorem sagittis vel. Donec euismod nisl sed orci placerat, vel semper elit imperdiet.

Sed tincidunt malesuada est et tristique. Vivamus sed quam bibendum, placerat odio a, pellentesque quam. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed nec leo hendrerit, elementum augue vitae, molestie augue. Phasellus a elit eget orci placerat consequat vel non turpis. Nulla facilisi. Cras augue est, porta ut massa eget, luctus aliquam quam. Morbi eleifend mattis dolor eu aliquam. Curabitur in consectetur velit. Cras facilisis ipsum viverra ipsum egestas semper. Donec bibendum vehicula rhoncus.`

let wordsCount = 0;
let etCount = 0;

let sParagraph = paragraph.split(' ');

for (let i=0; i < sParagraph.length; i++) {
  if(sParagraph[i].includes('\n')) {
    wordsCount++
  } else if(sParagraph[i] === "et" ) {
    etCount++
  }
  wordsCount++
 }

console.log('words', wordsCount)
console.log('et count', etCount)


