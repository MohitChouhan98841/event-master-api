export class EventResponse{
    constructor(data){
        this.title=data.title??'';
        this.id=data._id??'';
        this.description=data.description??'';
        this.capacity=data.capacity??0
        this.ticketPrice = data.ticketPrice??0
        this.images=data.images??[]
        this.venu=data.venu??'';
        this.createdAt=data.createdAt
        this.startDateTime=data.startDateTime
    }
}