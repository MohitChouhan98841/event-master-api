export class CategoryResponse{
    constructor(data){
        this.name=data.name?data.name:""
        this.id=data._id?data._id:""
        this.isActive=data.isActive?data.isActive:""
        this.createdAt=data.createdAt?data.createdAt:null
    }
}