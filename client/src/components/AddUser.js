import React from "react";


class AddUser extends React.Component {
    constructor(props) {
      super(props);
      this.state = { items: [], text: '' };
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      
    }
    
    render() {
      return (
        <div className="fullpack">
            <h3>Create New Player</h3>
            <div>
                <TodoList items={this.state.items} />
                    <form onSubmit={this.handleSubmit}>
                        <label htmlFor="username">
                            username
                        </label><br />
                        <input
                            id="name"
                            onChange={this.handleChange}
                            value={this.state.text}
                            />
                    </form>
            </div>

            <TodoList items={this.state.items} />
            <form onSubmit={this.handleSubmit}>
                <label htmlFor="new-emai">
                    email
                </label><br />
                <input
                    id="email"
                    onChange={this.handleChange}
                    value={this.state.text}
                />
            </form>

            <TodoList items={this.state.items} />
            <form onSubmit={this.handleSubmit}>
                <label htmlFor="experience">
                    experience
                </label><br />
                <input
                    id="exp"
                    onChange={this.handleChange}
                    value={this.state.text}
                />
            </form>

            <TodoList items={this.state.items} />
            <form onSubmit={this.handleSubmit}>
                <label htmlFor="new-level">
                    level
                </label><br />
                <input
                    id="lvl"
                    onChange={this.handleChange}
                    value={this.state.string}
                />
            </form><br />
            <button>SUBMIT</button>

        </div>
      );
    }
  
    handleChange(e) {
      this.setState({ text: e.target.value });
    }
  
    handleSubmit(e) {
      e.preventDefault();
      if (this.state.text.length === 0) {
        return;
      }
      const newItem = {
        text: this.state.text,
        id: Date.now()
      };
      this.setState(state => ({
        items: state.items.concat(newItem),
        text: ''
      }));
    }
  }
  
    class TodoList extends React.Component {
        render() {
        return (
            <ul>
            {this.props.items.map(item => (
                <li key={item.id}>{item.text}</li>
            ))}
            </ul>
        );
    }
}

export default AddUser