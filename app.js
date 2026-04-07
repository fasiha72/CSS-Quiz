let username = document.getElementById("username");
let password = document.getElementById("password");
let loginBtn = document.getElementById("login-btn");

let loginContainer = document.getElementById("login-container");
let quizContainer = document.getElementById("quiz-container");
let quizForm = document.getElementById("quiz-form");
let submitBtn = document.getElementById("submit-btn");

let resultContainer = document.getElementById("result-container");
let score = document.getElementById("score");
let correct = document.getElementById("correct");
let wrong = document.getElementById("wrong");


// ✅ LOGIN
loginBtn.addEventListener("click", () => {
  if (username.value === "champs" && password.value === "champs123") {
    loginContainer.classList.add("hidden");
    quizContainer.classList.remove("hidden");
    loadQuiz();
  } else {
    Swal.fire({
      icon: 'error',
      title: 'Warning ❗',
      text: '❌Invalid username or password'
    });
  }
});


// ✅ QUESTIONS

let question = [
  { q: '1. What is CSS stands for ?', options: ['Creative Style Sheet', 'Colorful Style Sheet', 'Cascading style service', 'Cascading Style Sheets'], ans: 3 },

  { q: '2. CSS ka use kis liye hota hai?', options: ['Structure', 'Styling', 'Logic', 'Database'], ans: 1 },

  { q: '3. HTML mein CSS add karne ke kitne tareeqay hain?', options: ['1', '2', '3', '4'], ans: 2 },

  { q: '4. Inline CSS ka syntax kya hai?', options: ['<style>', 'style=""', '<css>', '<link>'], ans: 1 },

  { q: '5. External CSS file ka extension kya hota hai?', options: ['.html', '.js', '.css', '.style'], ans: 2 },

  { q: '6. CSS selector ka kaam kya hai?', options: ['Value dena', 'Element select karna', 'Color change karna', 'Border banana'], ans: 1 },

  { q: '7. ID selector ka symbol kya hota hai?', options: ['.', '#', '*', '&'], ans: 1 },

  { q: '8. Class selector ka symbol kya hota hai?', options: ['#', '*', '.', '@'], ans: 2 },

  { q: '9. Background color set karne ki property?', options: ['color', 'bgcolor', 'background-color', 'background'], ans: 2 },

  { q: '10. Text ka color change karne ke liye?', options: ['text-color', 'font-color', 'color', 'fg-color'], ans: 2 },

  { q: '11. CSS comment ka syntax kya hai?', options: ['// comment', '<!-- -->', '/* */', '#'], ans: 2 },

  { q: '12. Font ka size change karne ki property?', options: ['font-style', 'font-size', 'text-size', 'size'], ans: 1 },

  { q: '13. <div> ka default display kya hota hai?', options: ['inline', 'inline-block', 'block', 'none'], ans: 2 },

  { q: '14. <span> ka default display kya hota hai?', options: ['block', 'inline', 'flex', 'grid'], ans: 1 },

  { q: '15. Margin ka matlab kya hai?', options: ['Andar ki space', 'Bahar ki space', 'Border', 'Height'], ans: 1 },

  { q: '16. Padding ka matlab kya hai?', options: ['Border', 'Bahar ki space', 'Andar ki space', 'Width'], ans: 2 },

  { q: '17. Border banane ke liye kaunsi property use hoti hai?', options: ['outline', 'frame', 'border', 'edge'], ans: 2 },

  { q: '18. CSS box model mein kya kya shamil hota hai?', options: ['Margin', 'Padding', 'Border', 'All of these'], ans: 3 },

  { q: '19. Flexbox enable karne ke liye?', options: ['display: block', 'display: flex', 'position: flex', 'float: flex'], ans: 1 },

  { q: '20. Position property ka default value kya hai?', options: ['fixed', 'absolute', 'relative', 'static'], ans: 3 },

  { q: '21. Fixed position ka use kis liye hota hai?', options: ['Scroll ke sath move', 'Same jagah rehna', 'Hide karna', 'Center'], ans: 1 },

  { q: '22. Z-index ka use kis liye hota hai?', options: ['Color', 'Height', 'Layer order', 'Width'], ans: 2 },

  { q: '23. Image CSS mein add karne ke liye?', options: ['img', 'background-image', 'src', 'image'], ans: 1 },

  { q: '24. List ke bullets remove karne ke liye?', options: ['list-type', 'list-style', 'list-style-type: none', 'text-decoration'], ans: 2 },

  { q: '25. Text underline remove karne ke liye?', options: ['text-style', 'decoration', 'text-decoration: none', 'underline-off'], ans: 2 },

  { q: '26. Cursor change karne ke liye?', options: ['mouse', 'pointer', 'cursor', 'click'], ans: 2 },

  { q: '27. Hover effect ke liye kaunsa selector?', options: [':active', ':focus', ':hover', ':click'], ans: 2 },

  { q: '28. Responsive design ke liye kya use hota hai?', options: ['Media Query', 'Flexbox', 'Grid', 'Float'], ans: 0 },

  { q: '29. Media query ka keyword kya hota hai?', options: ['when', 'if', '@media', 'screen'], ans: 2 },

  { q: '30. CSS Grid enable karne ke liye?', options: ['display: flex', 'display: grid', 'position: grid', 'float: grid'], ans: 1 },

  { q: '31. Font family set karne ke liye?', options: ['font-style', 'font', 'font-family', 'text-font'], ans: 2 },

  { q: '32. Bold text ke liye?', options: ['font-style', 'font-weight', 'text-bold', 'font'], ans: 1 },

  { q: '33. CSS mein color likhne ke tareeqay?', options: ['Name', 'RGB', 'HEX', 'All of these'], ans: 3 },

  { q: '34. Opacity ki range kya hoti hai?', options: ['0-10', '0-50', '0-1', '1-100'], ans: 2 },

  { q: '35. Overflow property ka use?', options: ['Scroll', 'Border', 'Color', 'Font'], ans: 0 },

  { q: '36. Scroll lane ke liye?', options: ['overflow: hidden', 'overflow: scroll', 'overflow: none', 'overflow: fix'], ans: 1 },

  { q: '37. CSS units ka example?', options: ['px', '%', 'em', 'All of these'], ans: 3 },

  { q: '38. Float property ka use?', options: ['Center', 'Align', 'Animate', 'Hide'], ans: 1 },

  { q: '39. Clear property ka use?', options: ['Float remove', 'Color clear', 'Margin clear', 'Text clear'], ans: 0 },

  { q: '40. Visibility hidden ka matlab?', options: ['Remove', 'Hide + space remove', 'Hide but space rahe', 'Show'], ans: 2 },

  { q: '41. Display none ka matlab?', options: ['Hide', 'Hide + space remove', 'Show', 'Blur'], ans: 1 },

  { q: '42. Animation ke liye kaunsa rule?', options: ['@keyframes', 'animate', 'motion', 'move'], ans: 0 },

  { q: '43. Transition ka use?', options: ['Animation', 'Smooth change', 'Delay', 'Hide'], ans: 1 },

  { q: '44. CSS variable ka syntax?', options: ['$var', '--var', '@var', '#var'], ans: 1 },

  { q: '45. CSS variable use karne ke liye?', options: ['var()', 'use()', 'get()', 'value()'], ans: 0 },

  { q: '46. Pseudo-element ka example?', options: [':hover', ':focus', '::before', ':active'], ans: 2 },

  { q: '47. !important ka use?', options: ['Ignore rule', 'High priority', 'Remove CSS', 'JS call'], ans: 1 },

  { q: '48. Text align center karne ke liye?', options: ['align', 'text-align', 'center', 'float'], ans: 1 },

  { q: '49. CSS kis ke sath use hoti hai?', options: ['HTML', 'JavaScript', 'Both', 'PHP'], ans: 2 },

  {
    q: '50. CSS me text ka color change karne ke liye kaunsa property use hota hai?', options: ['font-style', 'text-color', 'color', 'background-color'], ans: 2
  }
];


// ✅ LOAD QUIZ
function loadQuiz() {
  quizForm.innerHTML = "";

  question.forEach((q, index) => {
    let div = document.createElement("div");
    div.classList.add("question");

    div.innerHTML = `
            <h3>${q.q}</h3>
            ${q.options.map((opt, i) =>
      `<label>
                    <input type="radio" name="q${index}" value="${i}">
                    ${opt}
                </label>`
    ).join("")}
        `;

    quizForm.appendChild(div);
  });

  submitBtn.classList.remove("hidden");
}


// ✅ SUBMIT
submitBtn.addEventListener("click", (e) => {
  e.preventDefault();

  let correctCount = 0;

  question.forEach((q, i) => {
    let selected = document.querySelector(`input[name="q${i}"]:checked`);
    if (selected && parseInt(selected.value) === q.ans) {
      correctCount++;
    }
  });

  let wrongCount = question.length - correctCount;
  let marks = (correctCount / question.length) * 100;

  quizContainer.classList.add("hidden");
  resultContainer.classList.remove("hidden");

  score.textContent = `Your Score: ${marks.toFixed(2)}%`;
  correct.textContent = `✅ Correct Answers: ${correctCount}`;
  wrong.textContent = `❌ Wrong Answers: ${wrongCount}`;
});