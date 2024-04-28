function createInputComponent(containerId, labelText, inputType) {
  
    var container = document.getElementById(containerId);
    var label = document.createElement('label');
    
    label.textContent = labelText;
    
    var input = document.createElement('input');
    
    input.type = inputType;
    
    container.appendChild(label);
    
    container.appendChild(input);
}

createInputComponent('nameComponent', 'Nome:', 'text');
createInputComponent('cpfComponent', 'CPF:', 'text');
