const fs=require("fs");//dosya işlemleri için modül
//read
fs.readFile("./info.txt",(err,data)=>{// readFile asenkron  fonksiyondur.
if(err){
    console.log(err)
}
console.log(data.toString())//data olarak buffer verisi gelir, string data için toString kullan.
})
console.log("final")

//write
//üzerine yazar önceki verileri siler.Dosya yoksa yaratır ve yazar.
fs.writeFile("./info.txt","How are you?",()=>{
    console.log("Writing is succesfull")
})

//update
setTimeout(() => {
    fs.appendFile("./info.txt","Updated now",(err)=>{
        if(err){
            console.log(err)
        }
        console.log("File updated")
    })
}, 500);

//directories create
//mkdir klasör oluşturur,daha önceden oluşmuşşsa hata verir.

if(!fs.existsSync("./assets")){//dosya daha önceden oluşturulmadıysa oluştur aksi halde dosyayı sil.
    fs.mkdir("./assets",(err)=>{//klasör yaratma
        if(err){
            console.log(err)
            bool=true;
        }
        console.log("Folder created")
    })
}else{
    fs.rmdir("./assets",(err)=>{//klasör silme işlemi
        if(err){
            console.log(err)
        }
        console.log("Folder deleted")
    })
}

//delete
if(fs.existsSync("./deleteFile.txt")){//dosya silme işlemi
fs.unlink("./deleteFile.txt",(err)=>{
    if(err){
        console.log(err)
    }
    console.log("File deleted")
})
}
    



/*
var bool=false;
if(bool){//dosya daha önceden oluşturulmadıysa oluştur yoksa oluşturma
    fs.mkdir("./assets",(err)=>{
        if(err){
            console.log(err)
            bool=true;
        }
        console.log("Folder created")
    })
}
else{
    console.log("Folder Already Exsists")
}
*/
