let personalInfo = { 
    name: "Yishmael Bewry",
    address: "1649 Westwind Way",
    city: "McLean",
    state: "Virginia",
    zip: "22102"


}

function printInfo(info){
    console.log(`
        ${info.name}
        ${info.address}, ${info.city}, ${info.state}, ${info.zip}
    `);




}

printInfo(personalInfo);