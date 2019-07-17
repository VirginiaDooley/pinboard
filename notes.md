use lifecycle function once state is set (after search) to map state

look at gif list container for how to map state in container
create a class property and render it. see for example:


renderTodos = () => this.props.todos.map((todo, id) => <Todo key={id} text={todo} />)

  render() {
    return(
      <div>{this.renderTodos()}</div>
    );
  }
};



separate search form into another component
