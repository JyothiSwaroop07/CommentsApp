This project is a **Comments App** built using react.js.

**Functionality:** <br/>

The app have the following functionalities:

- Initially, the list of comments will be zero and the inputs fields are empty
- When non-empty values are provided and **Add Comment** button is clicked,
  - A new comment will be added to the list of comments
  - The comments count will be incremented by one
  - The value of the input fields for name and comment will be updated to their initial values
- The **Like** button works with a toggling nature.
- When the **Delete** button of a comment is clicked, the comment gets deleted from the list of comments and the comments count will be decremented by one

**Implementation Files:** <br/>

These are the files used to complete the implementation:

- `src/components/Comments/index.js`
- `src/components/Comments/index.css`
- `src/components/CommentItem/index.js`
- `src/components/CommentItem/index.css`

<br>

**Note:**

- The `formatDistanceToNow` function in the **date-fns** package is used to return the gap between the given date and now in words.

Follow the below link to go to the Comments app:

<a href="https://vjscommentsapp.ccbp.tech">
Link for the Comments App 
</a>
