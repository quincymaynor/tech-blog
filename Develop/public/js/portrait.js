console.log("---portrait.js attached---");

//Deepai requirements
const deepai = require('deepai'); 
deepai.setApiKey('quickstart-QUdJIGlzIGNvbWluZy4uLi4K');

//Pick our elements ------- our views will need elements with these IDs 

//Submit button
const submitBtn = document.getElementById('submitBtn');

//Apply button (will apply generated image to character database)
const applyBtn = document.getElementById('applyBtn');

//User text input field
var userText = document.getElementById('yourFileInputId');

//Placeholder image where new image will be generated
var generateHolder = document.getElementById('generateHolder');

//--------

//Add a function to our submit button
submitBtn.addEventListener('click', generatePortrait);

//Add a function to our apply button
applyBtn.addEventListener('click', applyPortrait);

//async Function to generate image
const generatePortrait = async () => {
    //Call to the deepai api using the users input text and console log
    var resp = await deepai.callStandardApi("fantasy-portrait-generator", {
                    text: userText,
            });
            console.log(resp);

            //set the placeholder's img src to the response url instead
            generateHolder.src = resp;
}

//TODO: Code for the generated image to be applied to the selected character