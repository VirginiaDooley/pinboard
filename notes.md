**REACT**
App
 -SearchContainer
  -SearchResults
 -BoardContainer
  -Board
  -BoardList
  -CreateBoard
  -ShowBoard

How do I get select keys from images to also appear in boardImages?

 *render chosenImages from the state.board. Consider using a lifecycle function once state is set (after search) to map state*

The board needs to render images and update state once a new image is selected. Maybe shouldcomponentupdate

OR

Should I intro Redux at this point to manage global state

other tasks:
create new board
save board
render all boards



*separate search form into another component*

**REDUX**
*reducers*

*actions*

*Provider*

*connect()*

**RAILS**
serializers?

Join table
has_and_belongs_to_many*

*Create controller actions to match routes*

*Use Thunk w Rails API in the Redux action see for example https://github.com/NickisKnowledge/Dinner_n_10_React-Redux_Project/blob/master/client/src/reducers/dinnersReducer.js*

Refer back here when you're ready to build out the controller actions https://instruction.learn.co/student/video_lectures#/?query=react-redux

**FURTHER DEVELOPMENT GOALS**
*edit and update boards
