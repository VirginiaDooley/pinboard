**REACT**
App
-NavBar
 -SearchContainer
  -SearchResults
 -CreateBoard
  -BoardList
  -ShowBoard

  Issues:

    can't access board show without going to index link first. Should I add lifecycle method?

    as time allows, figure out board show redirect after save

    just show boardslist component in that route

    diff url for production and DEVELOPMENT?

  what else for project specs?
    finish README
    blog and video
    deploy to heroku, as time allows
<!--

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
 -->








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

*Use Thunk w Rails API in the Redux action see for example https://github.com/NickisKnowledge/Dinner_n_10_React-Redux_Project/blob/master/client/src/reducers/dinnersReducer.js*

HEROKU

update proxy in front end in package.json  with new heroku url

update puma in back end with new heroku url

**FURTHER DEVELOPMENT GOALS**
*edit and update boards**


**CSS**
