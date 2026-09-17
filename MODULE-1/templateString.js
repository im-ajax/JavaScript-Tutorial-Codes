const firstName='kamruzzaman';
const lastName='Shuvo';
const aboutMe=`My name is ${firstName}`;
// `` this is called backTick. 
// we can do any thing in this field.
// it is called template String
console.log(aboutMe);
const fullName=`${firstName} ${lastName}`;


// function writing with a template string
function getCardHTML(name,description,price){
    const div= `
        <div class="Card">
            <h2>${name.toUpperCase()}</h2>
            <p>Price: ${price}</p>
            <p>${description}</p>
        </div>
    `;
    console.log(div);
}
getCardHTML('iphone 12','This is the lates Iphone Model', 999);