const button = document.getElementById("input-button");
const input = document.getElementById("input-el");
let myLeads = [];
const UlEl = document.getElementById("ul-el");
button.addEventListener("click", function ()
{
    myLeads.push(input.value);
    input.value = "";
    display();
})

    // for (let i = 0; i < myLeads.length; i++) {
    //   UlEl.innerHTML += "<li>" + myLeads[i] + "</li>";
    // }

    // for(let i=0;i<myLeads.length;i++) {      // second method for using html in javascript code.
    // const li = document.createElement("li");
    // li.textContent = myLeads[i];
    // UlEl.append(li);
    // }

    function display()
    {
    let listItems = ""  // THIRD method for using html
    for (let i = 0; i < myLeads.length; i++) {
    // listItems += "<li><a href='#'>" + myLeads[i] + "</a></li>"; This is king of a very sophisticated method so instead we use backticks which help us in writing our code like in HTML format.

    listItems += `<li>
                    <a href = "${myLeads[i]}" target='_blank'
                    ${myLeads[i]}
                    </a>
                    </li>
                `
    }

    UlEl.innerHTML = listItems;
}





// difference between const and let is simple if our element is going to be same in all of the code ahead and we dont wanna make any changes in it we use const and on the other hand if we want to use something again and again we use let instead.

