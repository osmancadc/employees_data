import * as inputController from './inputController.js';
import * as tableController from './tableController.js';

$("#my-file-selector").change(function (e) {
    $('#upload-file-info').val(this.files[0].name)
    inputController.excelToJson(this.files[0], tableController.fillTable)
    
});


