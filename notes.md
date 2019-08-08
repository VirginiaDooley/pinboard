**REACT**
App
-NavBar
 -SearchContainer
  -SearchResults
 -BoardContainer
  -BoardList
  -ShowBoard

  Issues:

  selectImages and form save is rendering twice

  redirect to show board

  board save and boardImages appear twice (second inside pinboard is correct)

  How can I get access to src images for show

  what else for project specs?

  what exactly is set boards action doing?


  fetch('http://localhost:3000/api/v1/boards', {
      method: 'POST',
      body: JSON.stringify(board),
      headers: { 
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
    .then(res => res.json())
    .then(newBoard => {debugger})
    .catch(error => {
        console.log(error);
        alert("Board save failed, please try again!");
    })
  this.props.history.push(`/boards/${board.id}`)
}









steps to REDUX
write an action
write a function reducer

other tasks:
deploy to heroku

**REDUX**
*reducers*

*actions*

*Provider*

*connect()*

**RAILS**

change db to postgres sql in production

refer study group repo for controller actions to get json data

Join table
has_and_belongs_to_many*

*Create controller actions to match routes*

*Use Thunk w Rails API in the Redux action see for example https://github.com/NickisKnowledge/Dinner_n_10_React-Redux_Project/blob/master/client/src/reducers/dinnersReducer.js*

Refer back here when you're ready to build out the controller actions https://instruction.learn.co/student/video_lectures#/?query=react-redux

HEROKU

update proxy in front end in package.json  with new heroku url

update puma in back end with new heroku url

**FURTHER DEVELOPMENT GOALS**
*edit and update boards**


**CSS**
responsive components
