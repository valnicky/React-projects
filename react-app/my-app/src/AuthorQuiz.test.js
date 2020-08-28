import React from 'react';
import { render } from '@testing-library/react';
import AuthorQuiz from './AuthorQuiz';

const state = {
    turnData: {
        books: ['The Shining', 'IT', 'David Coperfield', 'A Tale of Two Cities', Hamlet'' 
        ],
        author: {
            name: 'Charles Dickens',
            imageUrl: 'images/authors/charlesdickens.jpg',
            imageSource: 'Wikimedia Commons',
            books: ['David Copperfield', 'A Tale of Two Cities']
        },
    },
    hidhlight: 'none'
}




describe("Author Quiz", () => {
    it("renders without crashing", () => {
        const div = document.createElement("div");
        ReactDom.render(<AuthorQuiz {...state} onAnswerSelected={()=> {}}/>, div);
    });
});