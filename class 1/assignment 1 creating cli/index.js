//  const {Command}= require ("commander")
// // const fs=require('fs');
//   const program =new Command();
// // program
// // .name("word counter")
// // .description("count the no of words in the file ")
// // .argument("<file>","path of the file ")
// // .action((file)=>{
// //     const data=fs.readFileSync(file,"utf-8")
// //     const word=data.trim().split(/\s+/);
// //     console.log(`you have ${word.length} word in the file`)
    
// // });
// // program.parse();


// const fs=require("fs")

// function main(fileName){
//     fs.readFile(fileName,"utf-8",function(err,data){
//          let total=0;
//          for(let i=0;i<data.length;i++){
//             if(data[i]===" "){
//                 total+=1;
//             }
//          }
//          console.log(total)
//     })
// }
// main("file.txt");


const fs = require("fs");
const { Command } = require("commander");

const program = new Command();

program
  .name("file-cli")
  .description("CLI to do file based task")
  .version("0.8.0");

program
  .command("count")
  .description("count the number of words")
  .argument("<file>", "file to count")
  .action((file) => {
    fs.readFile(file, "utf-8", (err, data) => {
      if (err) {
        console.log(err.message);
        return;
      }

      const words = data.trim().split(/\s+/);

      console.log(`There are ${words.length} words in the ${file}`);
    });
  });

program.parse();
