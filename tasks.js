
/**
 * Starts the application
 * This is the function that is run when the app starts
 * 
 * It prints a welcome line, and then a line with "----",
 * then nothing.
 *  
 * @param  {string} name the name of the app
 * @returns {void}
 */
function startApp(name){
  process.stdin.resume();
  process.stdin.setEncoding('utf8');
  process.stdin.on('data', onDataReceived);
  console.log(`Welcome to ${name}'s application!`)
  console.log("--------------------")
}


/**
 * Decides what to do depending on the data that was received
 * This function receives the input sent by the user.
 * 
 * For example, if the user entered 
 * ```
 * node tasks.js batata
 * ```
 * 
 * The text received would be "batata"
 * This function  then directs to other functions
 * 
 * @param  {string} text data typed by the user
 * @returns {void}
 */
function onDataReceived(text) {
  let addcomp = /add/;
  let removecomp = /remove/;
  if (text === 'quit\n' || text === 'exit\n') {
    quit();
  }
  else if(text.match(/hello/)){
    hello(text);
  }else if (text === "help\n"){
    help();
  }else if (text === "list\n"){
    list();
  }else if (addcomp.test(text)){
    add(text);
  }else if (removecomp.test(text)){
    remove(text);
  }else{
    unknownCommand(text);
  }
}


/**
 * prints "unknown command"
 * This function is supposed to run when all other commands have failed
 *
 * @param  {string} c the text received
 * @returns {void}
 */
function unknownCommand(c){
  console.log('unknown command: "'+c.trim()+'"')
}


/**
 * Says hello
 *
 * @returns {void}
 */
function hello(name){
  console.log(name.trim() + "!")
}


/**
 * Exits the application
 *
 * @returns {void}
 */
function quit(){
  console.log('Quitting now, goodbye!')
  process.exit();
}

// The following line starts the application
startApp("Maria Jansian")

// show you the possible commands you can use in this application
function help(){
  console.log ("The possible commands are: hello, hello "+ '+ value' +" ,quit or exit, add, remove and help")
}

let array= ["go home","work", "eat"]

function list(){
  for(let i = 0; i<array.length; i++){
    console.log((i+1)+". " + array[i])
  }
}
// add a new item to the array
function add(x){
  let result = x.replace(/add/,"");
  if(result.trim() !== ""){
    array.push(result.trim());
  }else{ console.log("Error!")}
}
//remove a new item to the array
function remove(y){
  let index= y.match(/\d+/);
if (index!== null){
  if(index > array.length){
    console.log("This number do not exist")
  }else{
    index=parseInt(index[0])
    array.splice(index-1,1)
  }
  }else{ 
    array.pop()
  }
}