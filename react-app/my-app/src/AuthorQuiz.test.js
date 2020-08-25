import React from 'react';
import { render } from '@testing-library/react';
import AuthorQuiz from './AuthorQuiz';

describe("Author Quiz", () => {
it("renders without crashing", () => {
const div = document.createElement("div");
ReactDom.render(
<AuthorQuiz />, div);
});
});