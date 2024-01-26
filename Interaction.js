export class Interaction {
  prompt = "";
  response = "";
  constructor(prompt, response){
    this.prompt = prompt;
    this.response = response;
  }
  
  show() {
    console.log(
      `** Prompt: ${this.prompt} \n** Response: ${this.response}`
    );
  }

  getType(){
    return "SIMPLE";
  }
}
export default Interaction;