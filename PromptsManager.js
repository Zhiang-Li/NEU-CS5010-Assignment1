import Interaction from "./Interaction.js";
import DalleInteraction from "./DalleInteraction.js";
export class PromptsManager {
  interactions = [];

  // show all the interactions
  showAllInteractions(){
    for ( let i of this.interactions){
      console.log(this.interactions.indexOf(i));
      i.show();
      console.log(i.getType());
      console.log("\n");
    }
  }

  // record prompt 
  addInteraction(prompt, response) {
    const p = new Interaction(prompt, response);
    this.interactions.push(p);
  }

  // record prompt with images
  addDalleInteraction(prompt, response, url) {
    const p = new DalleInteraction(prompt, response, url);
    this.interactions.push(p);
  }

  // remove prompt
  removeAction(index){
    if (index < this.interactions.length && index >= 0){
      console.log("Caution! The following interaction has been removed:");
      this.interactions[index].show();
      this.interactions.splice(index,1);
    }
    else{
      console.log(`The index ${index} you entered does not have a corresponding interaction`);
    }
  }

  // count how many interactions recorded currently
  countInteractions(){
    var num_simp = 0;
    var num_dalle = 0;
    for ( let i of this.interactions){
      if (i.getType() === "SIMPLE"){
        num_simp = num_simp + 1;
      }
      if (i.getType() === "DALLE"){
        num_dalle = num_dalle + 1;
      }
    }
    console.log(
      `Great! You have total of ${this.interactions.length} interactions with ${num_simp} simple interactions and ${num_dalle} DALL-E interactions recorded! `
    );
  }
}

export default PromptsManager;