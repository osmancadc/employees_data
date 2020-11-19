import * as inputController from './inputController.js';

$("#my-file-selector").change(function (e) { 
    $('#upload-file-info').val(this.files[0].name)    
});
