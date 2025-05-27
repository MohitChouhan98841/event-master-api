

export class UserResponse{
    constructor(data){
        this.userName=data.userName?data.userName:"";
        this.email=data.email?data.email:"";
        this.profileImage=data.profileImage?data.profileImage:"";
        this.profileImage=data.profileImage?data.profileImage:"";
        this.userRole=data.userRole?data.userRole:"";
    }
}