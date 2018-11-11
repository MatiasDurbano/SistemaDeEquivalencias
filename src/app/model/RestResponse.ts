export class RestResponse{
     responseCode:number;
	 message:string;
      constructor(responseCode: number, message: string){
        this.responseCode=responseCode;
        this.message=message;
     }
}