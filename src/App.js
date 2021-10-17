import { useState } from "react";
import "./styles.css";

var booksDB = {
  Fiction: [
    {
      name: "Alchemist",
      rating: "4.5/5",
      Description:
        "The Alchemist is a novel by Brazilian author Paulo Coelho that was first published in 1988. Originally written in Portuguese, it became a widely translated international bestseller."
    },
    {
      name: "To kill a Mocking Bird",
      rating: "4.5/5",
      Description:
        "Harper Lee, believed to be one of the most influential authors to have ever existed, famously published only a single novel (up until its controversial sequel was published in 2015 just before her death). Lee’s To Kill a Mockingbird was published in 1960 and became an immediate classic of literature. The novel examines racism in the American South through the innocent wide eyes of a clever young girl named Jean Louise (“Scout”) Finch."
    },
    {
      name: "Animal Farm",
      rating: "3.5/5",
      Description:
        "Animal Farm is a satirical allegorical novella by George Orwell, first published in England on 17 August 1945. The book tells the story of a group of farm animals who rebel against their human farmer, hoping to create a society where the animals can be equal, free, and happy"
    }
  ],
  NonFiction: [
    {
      name: "Sapiens",
      rating: "4.5/5",
      Description:
        "A Brief History of Humankind is a book by Yuval Noah Harari, first published in Hebrew in Israel in 2011 based on a series of lectures Harari taught at The Hebrew University of Jerusalem, and in English in 2014."
    },
    {
      name: "Atomic Habits",
      rating: "4.5/5",
      Description:
        "No matter your goals, Atomic Habits offers a proven framework for improving--every day. James Clear, one of the world's leading experts on habit formation, reveals practical strategies that will teach you exactly how to form good habits, break bad ones, and master the tiny behaviors that lead to remarkable results."
    },
    {
      name: "Order of Time",
      rating: "4.5/5",
      Description:
        " The Order of Time is a book by Italian physicist Carlo Rovelli. It is about time in physics. Carlo Rovelli is the leading scientist who writes about warped time and at the forefront of physicists who are trying to unify theory of relativity and loop quantum gravity."
    }
  ],
  Programming: [
    {
      name: "Eloquent Javascript",
      rating: "4.5/5",
      Description:
        "Introduction to programming in JavaScript focuses on writing real applications. JavaScript lies at the heart of almost every modern web application, from social apps like Twitter to browser-based game frameworks like Phaser and Babylon."
    },
    {
      name: "Let us C",
      rating: "4.5/5",
      Description:
        "Considered to be one of the best-selling programming books ever written, the 8th edition has now been edited, revised, and updated. Online content with demos, code, compiler, exicutables, and MATLAB examples have been added to the book."
    },
    {
      name: "Clean Code",
      rating: "4/5",
      Description:
        "Even bad code can function. But if code isn't clean, it can bring a development organization to its knees. Every year, countless hours and significant resources are lost because of poorly written code. But it doesn't have to be that way."
    }
  ]
};

export default function App() {
  // console.log(Object.keys(booksDB))
  const [genre, setGenre] = useState("Fiction");

  function clickHandler(userGenre) {
    setGenre(userGenre);
  }
  return (
    <div className="App">
      <h1>Book Recommendation App</h1>
      <h2>Select Category to get suggestions</h2>
      <div>
        <div>
          {Object.keys(booksDB).map((element) => (
            <button
              onClick={() => clickHandler(element)}
              style={{
                cursor: "pointer",
                background: "#3B82F6",
                borderRadius: "0.5rem",
                padding: "0.5rem  1rem",
                border: "1px solid #3B82F6",
                margin: "1rem 0.3rem",
                color: "white"
              }}
            >
              {element}
            </button>
          ))}
        </div>

        {booksDB[genre].map((book) => (
          <div
            style={{
              padding: "1rem",
              border: "1px solid #D1D5DB",
              width: "50%",
              margin: "auto",
              borderRadius: "0.5rem",
              marginTop: "2rem"
            }}
          >
            <p>
              {book.name} {book.rating}
              <div
                style={{
                  padding: "1rem"
                }}
              >
                {book.rating}
              </div>
              <div>{book.Description}</div>
            </p>
          </div>
        ))}
        {/* </div> */}
      </div>
    </div>
  );
}
