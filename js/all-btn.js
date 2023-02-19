 


// tringle calculate start-------------

document.getElementById('tringle-calculate-btn').addEventListener('click',function(){
    
    const getTringleArea = getAreaById('land-input-field','height-input-field');

   condition('Tringle',getTringleArea,'1');
})
// tringle calulate end ----------


// Rectange calculate start -----------

document.getElementById('Rectangle-calculate-btn').addEventListener('click',function(){

    const getRectangleArea = getArea('width-input-field','length-input-field');

    condition( 'Rectangle',getRectangleArea,'2');
    
})

// Rectangle calculate end------------


// parallelogram calculate start -------------
 
document.getElementById('Parallelogram-calculate-btn').addEventListener('click',function(){
    
    const getParallelogramArea = getArea('parallelogram-width-input-field','parallelogram-height-input-field');

   condition('Parallelogram',getParallelogramArea,'3');
})

// parallelogram calculate end ------------


// Rhombus calculate start -------------
 
document.getElementById('Rhombus-calculate-btn').addEventListener('click',function(){
    const getRhombusArea = getAreaById('rhombus-width-field','rhombus-height-field');

    condition('Rhombus',getRhombusArea,'4');
})

// Rhombus calculate end ------------


// Pentagon calculate start -------------
 
document.getElementById('Pentagon-calculate-btn').addEventListener('click',function(){
    
    const getPentagonArea = getAreaById('pentagon-width-field','pentagon-height-field');

    condition('Pentagon',getPentagonArea,'5');
})

// Pentagon calculate end ------------


// Elipse calculate start --------------

document.getElementById('Elipse-calculate-btn').addEventListener('click',function(){
    
    const getElipseArea = getArea('elipse-width-field','elipse-height-field');

    
    
    condition('Elipse',getElipseArea,'6');

})

// Elipse  calculate end ------------