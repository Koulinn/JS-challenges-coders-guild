const checkEvenOdd = () => {
  for (let i = 1; i < 21; i++) {
    if (i % 2 === 0) {
      console.log(`${i} is even`);
    } else {
      console.log(`${i} is odd`);
    }
  }
};

// checkEvenOdd();

const bookList = [
  {
    title: "title1",
    author: "author1",
    alreadyRead: true,
  },
  {
    title: "title2",
    author: "author2",
    alreadyRead: true,
  },
  {
    title: "title3",
    author: "author3",
    alreadyRead: false,
  },
  {
    title: "title4",
    author: "author4",
    alreadyRead: true,
  },
];

const checkReadBooks = (list) => {
  list.forEach((book) => {
    if (book.alreadyRead) {
      console.log(`Book ${book.title} from ${book.author} already read.`);
    } else {
      console.log(`Book ${book.title} from ${book.author} not read.`);
    }
  });
};

// checkReadBooks(bookList);

const recipe = {
  recipeTitle: "Chocolate cake",
  servings: 8,
  ingredients: ["plain flour", "eggs", "cocoa powder", "oil"],
  directions: "Mix everything and hope for the best",
  letsCook: function () {
    console.log(`Let's cook ${this.recipeTitle}`);
  },
};

recipe.letsCook();

const topChoices = [
  "Chocolate Cake",
  "pizza",
  "prawns",
  "carbonara pasta",
  "muffins",
  "bread",
];

const phrase = (suff) => `My ${suff} choice`;

topChoices.forEach((choice, i) => {
  if (i === 0) {
    console.log(phrase(i + 1 + "st"));
  } else if (i === 1) {
    console.log(phrase(i + 1 + "nd"));
  } else if (i === 2) {
    console.log(phrase(i + 1 + "rd "));
  } else {
    console.log(phrase(i + 1 + "th "));
  }
});
