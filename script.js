// Elements Selection
const book = document.querySelector("#book-name");
const author = document.querySelector("#author-name");
const year = document.querySelector("#published-year");
const submit = document.querySelector(".col-6");
const list = document.querySelector("#book-list"); 

// Add Event Listener
submit.addEventListener("click", e => {
  e.preventDefault();

  if (book.value == "" && author.value == "" && year.value == "") {
    // Added Warning color
    book.classList.add('warning');
    author.classList.add('warning');
    year.classList.add('warning');

    // Added placeholder warning
    book.setAttribute("placeholder", "Write a book name")
    author.setAttribute("placeholder", "Write an author name")
    year.setAttribute("placeholder", "Write year published")

    // Function to remove warning color and placeholder warning
    function removeWarning() {
      book.classList.remove('warning');
      author.classList.remove('warning');
      year.classList.remove('warning');
      book.setAttribute("placeholder", "")
      author.setAttribute("placeholder", "")
      year.setAttribute("placeholder", "")

    }
    
    setTimeout(removeWarning, 1050);
  }
  else if (book.value == "") {
    // Individual warning
    // Blank book name warning
    book.classList.add('warning');
    book.setAttribute("placeholder", "Write a book name")

    function removeBookWarning() {
      book.classList.remove('warning');
      book.setAttribute("placeholder", "")
    }

    setTimeout(removeBookWarning, 1050);

  }
  else if (author.value == "") {
    // Blank author warning
    author.classList.add('warning');
    author.setAttribute("placeholder", "Write an author name")

    function removeAuthorWarning() {
      author.classList.remove('warning');
      author.setAttribute("placeholder", "")
    }

    setTimeout(removeAuthorWarning, 1050);

  }
  else if (year.value == "") {
    // Blank year published warning
    year.classList.add('warning');
    year.setAttribute("placeholder", "Write year published")

    function removeYearWarning() {
      year.classList.remove('warning');
      year.setAttribute("placeholder", "")
    }

    setTimeout(removeYearWarning, 1050);
  }
  else {
    // Row Creation
    const newRow = document.createElement("tr");
    list.appendChild(newRow)

    // New Book Column Creation and Take Input
    const newBookColumn = document.createElement("th");
    newRow.appendChild(newBookColumn);
    newBookColumn.innerText = book.value;

    // New Author Column Creation and Take Input
    const newAuthorColumn = document.createElement("th");
    newRow.appendChild(newAuthorColumn);
    newAuthorColumn.innerText = author.value;

    // New Year Column Creation and Take Input
    const newYearColumn = document.createElement("th");
    newRow.appendChild(newYearColumn);
    newYearColumn.innerText = year.value;

    // Create table row delete buttons 
    const newDeleteButton = document.createElement("th");
    newRow.appendChild(newDeleteButton);
    newDeleteButton.innerHTML = '';

    const newDeleteButton1 = document.createElement("th");
    newRow.appendChild(newDeleteButton1);
    const b= newDeleteButton1.innerHTML = '';
    console.log(b);
  }
// Blank all box after the input was taken
  book.value = "";
  author.value = "";
  year.value = "";
})