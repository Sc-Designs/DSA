let name = ["Suvam1","Suvam2","Suvam3","Suvam4","Suvam5","Suvam6"];
let hegiht = [187,200,134,124,115,120];

let sortingPeople = (name,hegiht) => {
    for (let i = 0; i < name.length; i++) {
        for (let j = 0; j < name.length - i - 1; j++) {
            if(hegiht[j] < hegiht[j+1]){
                let temp = hegiht[j];
                hegiht[j] = hegiht[j+1];
                hegiht[j+1] = temp;
                let temp1 = name[j];
                name[j] = name[j+1];
                name[j+1] = temp1;
            }
        }
    }
    console.log(name);

}
sortingPeople(name,hegiht);