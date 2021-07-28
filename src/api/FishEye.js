export class FishEyeApi {
    async getFishEyeData(){
        const response = await fetch("./src/db/FishEye.json") ;
        const data = await response.json();
        return data ;
        }
}