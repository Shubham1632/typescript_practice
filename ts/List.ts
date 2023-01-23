

export class List <h> {
    data : h[] 

    constructor (data : h[]){
        this.data = [...data]
    }

    setdata(data: h[]){
        this.data = [...data]
    }

    addelement(element : h){
        this.data.push(element);
    }

    getdata(): h[]{
        return [...this.data]
    }

}