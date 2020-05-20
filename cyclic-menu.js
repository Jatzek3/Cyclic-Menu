// Code for class of Whole Menu

class WholeMenu {
    constructor(){
    this.valuesStored = [];
    }
    getSelectedValue(valuesStored = this.valuesStored) {
        let selectedItem = valuesStored[menuVar.getSelectedValueIndex()]
        return selectedItem;
    }

    getSelectedValueIndex(valuesStored = this.valuesStored) {
        for (let i = 0 ;i < valuesStored.length; i += 1){
            if (valuesStored[i].isSelected){
                return i;
            }
        }
    }
    createHTMLelements(valuesStored = this.valuesStored) {
        // let i = 0;
        // let listContainer = document.createElement('div');
        let listElement = document.createElement('ul');
        // document.getElementsByTagName('body')[0].appendChild(listContainer);
        for (let i = 0; i < valuesStored.length; i += 1){
            let element = document.createElement('li');
            element.innerHTML = ` ${valuesStored[i].option} `;
            // element.id = `${i}`;
            // console.log(`creating element ${valuesStored[i].option} +
            //  element id ${element.id} + is selected ${valuesStored[i].isSelected}`);
            if (this.valuesStored[i].isSelected) {
                element.innerHTML = `<u>${valuesStored[i].option}</u> `;
            }
            listElement.appendChild(element);
            document.write(element.innerHTML);           
        }
    }   
}

// Code for Item Menus

class MenuItem {
    constructor(option ='', isSelected = false){
        this.option = option;
        this.isSelected = isSelected;
        // this.select = function(){
        //     return this.isSelected = true;
        // }
        menuVar.valuesStored.push(this);
    }
}

class AppendMenuItem extends MenuItem{
    constructor(option = 'append a choice', isSelected = false){
        super(option, isSelected);
    }
}
// Code for listener

function ButtonPress(event) {
    document.body.innerHTML = '';
    console.log(event.which);
    let temporarySelected = menuVar.getSelectedValue(); // We have to store the selected item ->
    if (event.keyCode === 37) {
        console.log("arrow left was pressed")
        if (menuVar.valuesStored[0].isSelected) {
            menuVar.valuesStored[menuVar.valuesStored.length - 1].isSelected = true;
            temporarySelected.isSelected = false;
        }
        else {
        menuVar.valuesStored[menuVar.getSelectedValueIndex() - 1].isSelected = true;
        temporarySelected.isSelected = false;
        }
    }
    if (event.keyCode === 39) {
        console.log("arrow right was pressed")
        if (menuVar.getSelectedValueIndex() === menuVar.valuesStored.length - 1){
            menuVar.valuesStored[0].isSelected = true;
            temporarySelected.isSelected = false;
        }
        else {
        menuVar.valuesStored[menuVar.getSelectedValueIndex() + 1].isSelected = true;
        temporarySelected.isSelected = false;
        }
    } 
    if (event.keyCode === 38) {
        console.log("arrow up was pressd")
        if (menuVar.getSelectedValue() instanceof AppendMenuItem){
            let newItem = prompt("Provide a name for new option", `Option ${menuVar.valuesStored.length}`);
            new MenuItem(newItem);
        }
        else {
            let newName = prompt("Choose a new name for this option", '');
            menuVar.getSelectedValue().option = newName;
        }
    }
    menuVar.createHTMLelements(); // render new one with the selected value based on arrows input 
    document.addEventListener("keydown", ButtonPress)
}

document.addEventListener(
    "keydown", ButtonPress
)

// function addItemToMenu(event){
//     if (event.keyCode ===  13){
//     console.log("Enter was pressed")
//         if (menuVar.getSelectedValue() instanceof AppendMenuItem){
//             let newItem = prompt("Provide a name for new option", `Option ${menuVar.valuesStored.length}`);
//             new MenuItem(newItem);
//         }
//     }
// }

// document.addEventListener(
//     "keydown", addItemToMenu
// )

// Setup

let menuVar = new WholeMenu();

let option4 = new AppendMenuItem();
let option1 = new MenuItem("option 1");
let option2 = new MenuItem("option 2", true);
let option3 = new MenuItem("option 3");
menuVar.createHTMLelements();



console.log("this fires at the end of the script")