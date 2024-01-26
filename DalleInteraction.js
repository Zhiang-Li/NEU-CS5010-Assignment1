import Interaction from "./Interaction.js";

export class DalleInteraction extends Interaction{
  constructor(prompt, response, url){
    super(prompt, response);
    this.url = url;
  }

  show(){
    console.log(
      `** Prompt: ${this.prompt} \n** Response: ${this.response} \n** Image URL:${this.url}`
    );
  }

  getType(){
    return "DALLE";
  }
}


export default DalleInteraction;