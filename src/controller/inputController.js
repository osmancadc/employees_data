export function excelToJson(selectedFile,callback) {
    let fileReader = new FileReader();
    fileReader.readAsBinaryString(selectedFile);
    fileReader.onload = (event) => {
        let data = event.target.result;
        let workbook = XLSX.read(data, {
            type: "binary"
        });
        workbook.SheetNames.forEach(sheet => {
            let rowObject = XLSX.utils.sheet_to_row_object_array(workbook.Sheets[sheet]);
            callback(rowObject,true)
        });
        
    }
}