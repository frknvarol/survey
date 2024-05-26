const checkmarkRadio = document.querySelectorAll('.checkmark-radio');
const ratingBarLabel = document.querySelector('.questions__rating-bar-label')
checkmarkRadio.forEach(element => element.style.width = ratingBarLabel.clientWidth.toString() + 'px');

function randomString(length) {
    let chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz'.split('');

    if (! length) {
        length = Math.floor(Math.random() * chars.length);
    }

    let str = '';
    for (let i = 0; i < length; i++) {
        str += chars[Math.floor(Math.random() * chars.length)];
    }
    return str;
}

const questionsSection = document.querySelector('.questions');

function addQuestion(question, ans1, ans2, ans3, ans4, ans5) {
    const questionsDiv = document.createElement('div');
    questionsDiv.className = 'questions__div';

    const questionsP = document.createElement('p');
    questionsP.className = 'questions__p';
    questionsP.appendChild(document.createTextNode(question));

    const questionsCheckbox = document.createElement('div');
    questionsCheckbox.className = 'questions__checkbox';



    for (let i = 1; i < 6; i++) {
        const questionsRadioLabel = document.createElement('label');
        questionsRadioLabel.className = 'questions__radio-label';

        const input = document.createElement('input');
        input.type = 'radio';
        input.name = 'radiobutton' + question.charAt(1);
        input.id = randomString(5);

        const parentSpan = document.createElement('span');
        parentSpan.className = 'checkmark-standard';

        const childSpan = document.createElement('span');
        childSpan.className = 'questions__radio-button-display';

        parentSpan.appendChild(childSpan);

        switch (i) {
            case 1:
                parentSpan.appendChild(document.createTextNode(ans1));
                break;
            case 2:
                parentSpan.appendChild(document.createTextNode(ans4));
                break;
            case 3:
                parentSpan.appendChild(document.createTextNode(ans2));
                break;
            case 4:
                parentSpan.appendChild(document.createTextNode(ans5));
                break;
            case 5:
                parentSpan.appendChild(document.createTextNode(ans3));
                break;
        }

        questionsRadioLabel.appendChild(input);
        questionsRadioLabel.appendChild(parentSpan);

        questionsCheckbox.appendChild(questionsRadioLabel);

    }


    questionsDiv.appendChild(questionsP);
    questionsDiv.appendChild(questionsCheckbox);
    questionsSection.appendChild(questionsDiv);

}

addQuestion("11. How often does your supervisor listen to employees' opinions when making decisions?",
    'Extremely often','Very often','Somewhat often','Not so often','Not at all often');
addQuestion("12. How easy is it for employees to disagree with the decisions made by your supervisor?",
    "Extremely easy", "Very easy","Somewhat easy","Not so easy","Not at all easy");




console.time('annen');
let i = 0;
while (i < 100_000_000) i++;
console.timeEnd('annen');
