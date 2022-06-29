const fs = require('fs');
const PdfParse = require('pdf-parse');


const pdfFile = fs.readFileSync('pars.pdf')

PdfParse(pdfFile).then((data)=>{
  // PDF text
  let textFile = data.text; 
  fs.writeFileSync('newFile.docx', textFile)
})
