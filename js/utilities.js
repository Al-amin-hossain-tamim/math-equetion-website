function getAreaById(input1,input2){
    const getLandfield = document.getElementById(input1);
    const landValueString = getLandfield.value ;
    const landValue = parseFloat(landValueString);
    getLandfield.value = '';

    const getHeightField = document.getElementById(input2);
    const heightValueString = getHeightField.value;
    const heightValue = parseFloat(heightValueString);
    getHeightField.value = '';

    if(isNaN(landValue) || isNaN(heightValue) || landValue <= 0 || heightValue <= 0){
        return ;
    }
    else{
        const calculateArea = 0.5 * landValue * heightValue ;
        const area = calculateArea.toFixed(2);
        return area;
    }
}


function getArea(input1,input2){
    const getLandfield = document.getElementById(input1);
    const landValueString = getLandfield.value ;
    const landValue = parseFloat(landValueString);
    getLandfield.value = '';

    const getHeightField = document.getElementById(input2);
    const heightValueString = getHeightField.value;
    const heightValue = parseFloat(heightValueString);
    getHeightField.value = '';

    if(isNaN(landValue) || isNaN(heightValue) || landValue <= 0 || heightValue <= 0){
        return ;
    }
    else if(input1 === 'elipse-width-field' && input2 === 'elipse-height-field'){
        const calculateArea = 3.14 * landValue * heightValue ;
        const area = calculateArea.toFixed(2);
        return area ;
    }
    else{
        const calculateArea = landValue * heightValue ;
        const area = calculateArea.toFixed(2);
        return area;
    }
}


function condition(input1 ,input2,input3){
    if(input2 === undefined){
        alert('please enter a valid number');
        return ;
    }
    else{
        const showResult = document.getElementById('result');
        const p = document.createElement('p');
        p.innerText =  input3+' ' +input1+ " = " + input2 ;

        showResult.appendChild(p);

        const button = document.createElement('button');
        button.innerText = 'cvtToM2';
        button.classList.add("button");
        showResult.appendChild(button);
    }
}