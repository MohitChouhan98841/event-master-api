

export class UserResponse{
    constructor(data){
        this.id=data._id??"";
        this.userName=data.userName??"";
        this.email=data.email??"";
        this.profileImage=data.profileImage??"";
        this.profileImage=data.profileImage??"";
        this.userRole=data.userRole??"";
    }
}