const fs=require("fs");
const readStream=fs.createReadStream("./text1.txt",{encoding:"utf-8"});//stream datası okunacak path belirle.
const writeStream=fs.createWriteStream("./text2 .txt");//stream datası okunacak path belirle.
//writeStream  belirtilen dosyaya yazar önceki veriyi silmez
readStream.on("data",(chunk)=>{
    console.log("************New Chunk****************")
    console.log(chunk)//chunk.toStirng() yazmak yerine{encoding:"utf-8"} kullanabilirsin.
  writeStream.write("\nNEW UPDATE CHUNK\n")
  writeStream.write(chunk)
})

//piping
//her chunk yani  belirli veri parçası okunmasıyla veri text2 ye yazılır
readStream.pipe(writeStream);