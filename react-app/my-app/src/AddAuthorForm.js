import React from 'react';
import "./AddAuthorForm.css";

class AuthorForm extends React.Component {
    render {
        
    }
}

function AddAuthorForm({ match }) {
    return <div className="AddAuthorForm">
        <h1>Add Author </h1>
        <form>
        <div className="AddAuthorForm__input"><label htmlFor="name">Name</label>
        <input type="text" name="name" /></div>
        <div className="AddAuthorForm__input"><label htmlFor="imageUrl">Image URL</label>
        <input type="text" name="imageUrl"/></div>
        </form>
    </div>;
}


export default AddAuthorForm;