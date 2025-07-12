let prompt = require("prompt-sync")();
class RailWayTic{
    constructor(){
        this.name = "";
        this.cotch = "";
        this.mobile = this.amount = this.totalAmount = 0;
    }
    accpeted(){
        const name = prompt("Enter Your Name : ");
        const cotch = prompt("Enter Cotch Choice |Ac Or Non-Ac| : ");
        const mobile = prompt("Enter Your Number : ");
        this.name = name;
        if(cotch == "Ac" || cotch == "Non-Ac"){
            this.cotch = cotch;
        } else {
            throw new Error("Somthing Went Wrong!");
        }
        if(mobile.length === 10){
            this.mobile = mobile;
        } else {
            throw new Error("Somthing Went Wrong!");
        }
    }
    updated(){
        if(this.cotch == "Ac"){
            this.amount = 350;
        }else {
            this.amount = 200;
        }
        let gst = this.amount * 0.18;
        this.totalAmount = this.amount + gst;
    }
    display(){
        console.log("");
        console.log("Name : " + this.name);
        console.log("Cotch Type : " + this.cotch);
        console.log("Mobile Number :" + this.mobile);
        console.log("Amount Price : ₨ " + this.amount + "/-");
        console.log("Total Amount after GST : ₨ " + this.totalAmount + "/-");
    }
}
let Ticket = new RailWayTic();
Ticket.accpeted();
Ticket.updated();
Ticket.display();