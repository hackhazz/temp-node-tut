const {readFile, writeFile} = require ('fs')
console.log('start')

readFile('./content/text.txt', 'utf8', (err, result)=>{
    if(err){
        console.log(err)
        return
    }
const first = result
readFile('./content/second.txt', 'utf8', (err,result) => {
        if (err) {
            console.log(err)
            return
        }

    // console.log(result)
const second = result
writeFile('./content/result-async.txt', `here is the result : ${first}, ${second}`,
    (err, result) => {
      if (err)   {
          console.log(err);
          return;
      }
      console.log('done with this task'); 
    }
    )
    })
})
console.log('starting next task');