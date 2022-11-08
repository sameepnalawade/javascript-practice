function doSomething(){
    const length=document.getElementById('length');
    const breadth=document.getElementById('breadth');
   
    let rectArea=new RectangleArea(+(length.value),+(breadth.value));
    console.log(rectArea.dimensions);
    console.log(rectArea.calcArea());
    rectArea.dimensions={length:10,breadth:10};
    console.log(rectArea.dimensions);
    console.log(rectArea.calcArea());
}