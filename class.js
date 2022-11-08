class RectangleArea{
    constructor(length,breadth){
        this.length=length;
        this.breadth=breadth;
    }

    get dimensions(){
        return {length:this.length,breadth:this.breadth};
    }

    set dimensions(dimensions){        //accepts only one argument
        this.length=dimensions.length;
        this.breadth=dimensions.breadth;
    }

    calcArea(){
        return this.length*this.breadth;
    }

   
}