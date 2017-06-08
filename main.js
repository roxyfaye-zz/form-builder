var container = document.querySelector('#container');

/*
var control = formData[0];
console.log(control)

var inputElement = document.createElement('input');
inputElement.id = control.id;
inputElement.placeholder = control.label;
container.appendChild(inputElement)
*/
function buildLabel(labelData) {

    console.log(labelData);
    var labelElement = document.createElement('label');
    labelElement.innerHTML = labelData;
    container.appendChild(labelElement);

}

function buildSelect(selectData) {

    buildLabel(selectData.label);
    
    var selectElement = document.createElement('select');
    //console.log(selectData.options);

    for(var index = 0; index < selectData.options.length; index ++) {
    
        var optionElement = document.createElement('option');
        optionElement.label = selectData.options[index].label;
        optionElement.value = selectData.options[index].value;
        selectElement.appendChild(optionElement);

    }

    container.appendChild(selectElement);


}

function buildTextArea(textAreaData) {

    buildLabel(textAreaData.label);

    var commentsContainer = document.createElement('div');
    commentsContainer.classList.add('comments-container')

    var textAreaElement = document.createElement('textarea');
    textAreaElement.id = textAreaData.id;

    commentsContainer.appendChild(textAreaElement);

    container.appendChild(commentsContainer);

}

function buildTextInput(textInputData) {

    buildLabel(textInputData.label);
    
    var inputElement = document.createElement('input');
    inputElement.id = textInputData.id;
    container.appendChild(inputElement);


}

for(var index = 0; index < formData.length; index ++) {

    if(formData[index].type == "select") {

        buildSelect(formData[index]);

    }else if (formData[index].type == "textarea") {

        buildTextArea(formData[index]);

    }
    else {

        buildTextInput(formData[index]);

    }

}
     

