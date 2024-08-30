const ColorTest = document.getElementById("ColorTest");

const StartButton = document.getElementById("StartButton");

const StopButton = document.getElementById("StopButton");

const ClearButton = document.getElementById("ClearButton");

const FontButton = document.getElementById("FontButton");

const ItemListComboBox = document.getElementById("ItemListComboBox");

const SpeedButton = document.getElementById("SpeedButton");

const CurrentSpeed = document.getElementById("CurrentSpeed");

const CountLabel = document.getElementById("CountLabel");

const AllStartButtons = document.querySelectorAll('#StartButton');
const SecondStartButton = AllStartButtons[1];

const AllStopButtons = document.querySelectorAll('#StopButton');
const SecondStopButton = AllStopButtons[1];

const AllSpeedButtons = document.querySelectorAll('#SpeedButton');
const SecondSpeedButton = AllSpeedButtons[1];

const AllClearButtons = document.querySelectorAll('#ClearButton');
const SecondClearButton = AllClearButtons[1];

const LoggingButtonID = document.getElementById("Logging");
const LogButtons = document.getElementsByClassName("LogButton");
const LogButton1 = LogButtons[0];

const GoTop = document.getElementById("GoTop");

//All buttons,Ids,classes,etc above

let b; //this is what will be used to stop and enable color generation
let GenerationSpeed = 1000; //initial value of Generation Speed
//------------> all for select function
let Select;
let Options;
let SelectedItem;
//---------------->
let Speed = GenerationSpeed;
let Count = 0;
var ColorArray = new Array;
var BackgroundArray = new Array;
let n = 0;
let n2 = 0;

/*all  elements above  */

function LogFunction() {
    console.warn(`Background Colors:(${BackgroundArray})`);
    console.warn(`Text Colors:(${ColorArray})`);
}

async function CopyFunction()
{
    return new Promise((resolve,reject) => {
        const AllBackGroundColorButton = document.querySelectorAll("#BackGroundButton");
        const AllTextColorButton = document.querySelectorAll("#TextColorButton");
        if(AllBackGroundColorButton.length > 0)
        {
            for(let i = 0; i<AllBackGroundColorButton.length;i++) {
                AllBackGroundColorButton[i].addEventListener("click", () => {
                navigator.clipboard.writeText(BackgroundArray[i]);
                AllBackGroundColorButton[i].innerHTML = "<b>COLOR COPIED!!!</b>";
                setTimeout(() => {
                AllBackGroundColorButton[i].innerHTML = " Copy Background "
                },700)
                })}
                resolve("Background button, pressed.");
        }
        if(AllTextColorButton.length > 0)
        {
            for(let i = 0; i<AllTextColorButton.length;i++) {
                AllTextColorButton[i].addEventListener("click", () => {
                    navigator.clipboard.writeText(ColorArray[i]);
                    AllTextColorButton[i].innerHTML = "<b>COLOR COPIED!!!</b>";
                    setTimeout(() => {
                        AllTextColorButton[i].innerHTML = " Copy Text ";
                    }, 700);
                })}
                resolve("Text button, Executed.");
        }
        else {
            reject(`Rejected: Length of All Text Color Button is: ${AllTextColorButton.length} and Length of All BackGroundColorButton is: ${AllBackGroundColorButton.length} is not bigger than 0`)}
    })
}
function GenerateColors() {
    Count++;
    CountLabel.innerHTML = `Colors tables that exist:${Count}`;

    //v1-v6 are for RGB.
    let v1 = Math.floor(Math.random().toFixed(2) * 258);
    let v2 = Math.floor(Math.random().toFixed(2) * 258);
    let v3 = Math.floor(Math.random().toFixed(2) * 258);
    let v4 = Math.floor(Math.random().toFixed(2) * 258);
    let v5 = Math.floor(Math.random().toFixed(2) * 258);
    let v6 = Math.floor(Math.random().toFixed(2) * 258);
    // for HexaDecimalValues(base16 values)
    const HashedColors = '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
    const SecondHashedColors = '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
    BackgroundArray[n2] = HashedColors;
    n2++;
    ColorArray[n] = SecondHashedColors;
    n++;
    //Padstart: make sure it stays 6 characters, if it's not fully filled, fill the rest with 0.
    /*
    ColorTest.innerHTML += `<span> Background Color --> rgb(${v1} , ${v2} , ${v3})   </span> ` +
    `<h1 style = 'background-color:rgb(${v1},${v2},${v3});
    Color:rgb(${v4},${v5},${v6})'> Text Color --> rgb:(${v4} , ${v5} , ${v6})
    </h1>`
    + "-------------------------------------------------------------------------- <br>";
    RGB CODE, converts everything into RGB.
    */
    ColorTest.innerHTML += `<span> Background Color --> ${HashedColors} \t\t <button class = "CopyButton" id = "BackGroundButton" onclick = "CopyFunction()"> Copy Background </button>   </span> ` +
    `<h1 style = 'background-color:${HashedColors};
    Color:${SecondHashedColors}'> Text Color --> ${SecondHashedColors} \t\t <button class = "CopyButton" id = "TextColorButton" onclick = "CopyFunction()"> Copy Text </button>
    </h1>`
    + "-------------------------------------------------------------------------- <br>";
    CopyFunction(); //call this incredible function so it isn't void....?
    // if(Count >= 10)
    // {
    // GoTop.style.display = 'block';
    // }
    // else if(Count <= 9)
    // {
    // GoTop.style.display = 'none';
    // }
    //literally breaks the display bro xD, will fix later.
}
//-----------------------------------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------------------------------
SpeedButton.addEventListener("click", (e) =>{
    try {
        GenerationSpeed = prompt("Enter a Number (in miliseconds)",0);
        if(!GenerationSpeed)
        {
            throw new Error("Cancelled by user.");
        }
        else if(GenerationSpeed == null || GenerationSpeed == "null")
        {
            throw new Error("Value is null.");
        }
        else {
            Speed = parseInt(GenerationSpeed);
            Speed += (/D/g,'');
            Speed.trim();
        }
        if(Speed == "" || Speed == " ")
        {
            throw new Error("Speed cannot be a String");
        }
        else if(Speed == `NaN`)
        {
        throw new Error("Not a Number, cannot resolve.");
        }
        else if(Speed < 0) {
            throw new Error("Speed cannot be less than 1");
        }
        else return CurrentSpeed.innerHTML = `Current Speed:${Speed/1000}s`;
    }
catch(e) {
    console.error(e);
}
    });

SecondSpeedButton.addEventListener("click", (e) =>{ 
    try {
        GenerationSpeed = prompt("Enter a Number (in miliseconds)",0);
        if(!GenerationSpeed)
        {
            throw new Error("Cancelled by user.");
        }
        else if(GenerationSpeed == null || GenerationSpeed == "null")
        {
            throw new Error("Value is null.");
        }
        else {
            Speed = parseInt(GenerationSpeed);
            Speed += (/D/g,'');
            Speed.trim();
        }
        if(Speed == "" || Speed == " ")
        {
            throw new Error("Speed cannot be a String");
        }
        else if(Speed == `NaN`)
        {
        throw new Error("Not a Number, cannot resolve.");
        }
        else if(Speed < 0) {
            throw new Error("Speed cannot be less than 1");
        }
        else return CurrentSpeed.innerHTML = `Current Speed:${Speed/1000}s`;
    }
catch(e) {
    console.error(e);
}
    });
//-----------------------------------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------------------------------
StartButton.addEventListener("click", (e) => {
    try {
        if(b)
        {
            return;
        }
        if(Speed == null || Speed == "null" || Speed == NaN || Speed == "NaN")
        {
            Speed = 1000;
            CurrentSpeed.innerHTML = `Current Speed:${Speed/1000}s`;
            b = setInterval(GenerateColors,Speed);
            throw new Error("Speed is unknown, it will be set to 1s");
        }
        else {
            b = setInterval(GenerateColors,Speed);
        }
    }
    catch(e)
    {
        console.error(e);
    }
});
SecondStartButton.addEventListener("click", (e) => {
    try {
        if(b)
        {
            return;
        }
        if(Speed == null || Speed == "null" || Speed == NaN || Speed == "NaN")
        {
            Speed = 1000;
            CurrentSpeed.innerHTML = `Current Speed:${Speed/1000}s`;
            b = setInterval(GenerateColors,Speed);
            console.warn(`Speed:${Speed}ms`)
            throw new Error("Speed is unknown, it will be set to 1s");
        }
        else {
            b = setInterval(GenerateColors,Speed);
        }
    }
    catch(e)
    {
        console.error(e);
    }
});
//-----------------------------------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------------------------------
StopButton.addEventListener("click", (e) => {
    try {
        clearInterval(b);
        b = null;
    }
    catch(e)
    {
        console.error(e);
    }
});
SecondStopButton.addEventListener("click", (e) => {
    try {
        clearInterval(b);
        b = null;
    }
    catch(e)
    {
        console.error(e);
    }
});
//-----------------------------------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------------------------------

ClearButton.addEventListener("click", (e) => {
    try {
        ColorTest.innerHTML = '';
        Count = 0;
        CountLabel.innerHTML = `Colors tables that exist:${Count}`;
        // ColorArray = ClearedColorArray;
        ColorArray = [];
        BackgroundArray = [];
        n = 0;
        n2 = 0;
    }
    catch(e)
    {
    console.warn(e);
    }
});
SecondClearButton.addEventListener("click", (e) => {
    try {
        ColorTest.innerHTML = '';
        Count = 0;
        CountLabel.innerHTML = `Colors tables that exist:${Count}`;
        // ColorArray = ClearedColorArray;
        ColorArray = [];
        BackgroundArray = [];
        n = 0;
        n2 = 0;
    }
    catch(e)
    {
    console.warn(e);
    }
});
//-----------------------------------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------------------------------
function SelectionF()
{
    Select = ItemListComboBox.selectedIndex;
    Options = ItemListComboBox.options[Select];
    SelectedItem = Options.textContent;
    ColorTest.style.fontFamily = SelectedItem;
}
FontButton.addEventListener("click", SelectionF);



/*This code is by chatgpt, uses for each function

document.querySelectorAll('.Buttons').forEach(function(button) {
    button.addEventListener('mouseenter', function() {
        var element = this;
        element.classList.add('ButtonsAnimations');
        setTimeout(function() {
            element.classList.remove('ButtonsAnimations');
        }, 1001);
    });
});
*/
//task in here: use async and await for this. --> COMPLETE
function ClassSelectorAndDeletor()
{
return new Promise((resolve,reject) => {
    const AllButtons = document.querySelectorAll('.Buttons');
    if(AllButtons)
    {
        for(const Buttons of AllButtons)
        {
            Buttons.addEventListener("mouseenter", function() {
                Buttons.classList.add('ButtonsAnimations')
                setTimeout(() => {
                    Buttons.classList.remove('ButtonsAnimations')
                },1001)
            })
        }
        resolve("Elements found, animation will be processed.");
    }
else {
    reject("Could not find anything.")
}})
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////
//actually just ignore, hover is better for copy buttons, no animation needed.
/*
async function CopyButtonAnimation()
{
    return new Promise((resolve,reject) => {
        const CopyButtons = document.querySelectorAll(".CopyButton");
        const AllBackGroundColorButton = document.querySelectorAll("#BackGroundButton");
        const AllTextColorButton = document.querySelectorAll("#TextColorButton");
        if(CopyButtons.length > 0)
        {
    for(const Buttons of AllBackGroundColorButton)
    {
        Buttons.addEventListener("mouseenter", function() {
            Buttons.classList.add("CopyButtonAnimation");
            setTimeout(() => {
            Buttons.classList.remove("CopyButtonAnimation");
            },1001)
        })
    }
    for(const Buttons of AllTextColorButton)
    {
        Buttons.addEventListener("mouseenter", function() {
            Buttons.classList.add("CopyButtonAnimation");
            setTimeout(() => {
            Buttons.classList.remove("CopyButtonAnimation");
            },1001)
        })
    }
            resolve("Found Button elements found, initiating animation.");
        }
        else {
            reject("Elements Not Found, animation rejected.");
            }
    })}

*/
   // This code is currently not possible due to the "new" elements not registering the fact that there is a new one. Very sad.
   // Ignore


function AnimationForLogButton() {
    return new Promise((resolve,reject) => {
        if(LogButtons)
        {
        for(const button of LogButtons)
        {
            button.addEventListener("mouseover",() => {
                button.classList.add("LogButtonhover");
                setTimeout(() => {
                button.classList.remove("LogButtonhover");
                },1200)
            })
        }
        resolve("Animation fetched.");
        }
        else {
            reject("Animation Could not be fetched for null/empty.");
        }
    })
}
async function DoFunctions() {
    try {
        const ResultOfClassSelectorAndDeletor = await ClassSelectorAndDeletor();
        console.log(ResultOfClassSelectorAndDeletor);

        const ResultOfAnimationForLogButton = await AnimationForLogButton();
        console.log(ResultOfAnimationForLogButton);

        const ResultOfCopyFunction = await CopyFunction();
        console.log(ResultOfCopyFunction);

        const ResultOfCopyButtonAnimation = await CopyButtonAnimation();
        console.log(ResultOfCopyButtonAnimation);
    }
    catch(error)
    {
        console.error(error);
    }
}
DoFunctions(); //call the funciton