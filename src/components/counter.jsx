import React, { Component } from 'react';

class Counter extends Component {
    // state = {
    //     value: this.props.counter.value,
    //     // imageUrl: 'https://picsum.photos/200'
    //     tags: ['tag1', 'tag2', 'tag3']
    // };

    styles = {
        fontSize: '30px',
        fontWeight: 'bold'
    };

    // constructor(){
    //     super();
    //     this.handleIncrement = this.handleIncrement.bind(this);        
    // }

    // handleIncrement = () => {
    //     this.setState({value: this.state.value + 1})
    // }

    render() {
        console.log('props', this.props);
        return ( 
            <React.Fragment>
                <h4>{this.props.counter.id}</h4>
                <span className={ this.newFunction() }>{ this.formatCount() }</span>
                <button className='btn btn-seconday btn-sm' onClick={ () => this.props.onIncrement(this.props.counter) }>Increment</button>
                {/* { this.state.tags.length === 0 && 'Please create a new tag!'}
                { this.renderTags() } */}
                <button onClick= {() => this.props.onDelete(this.props.counter.id)} className="btn btn-danger btn-sm m-2">Delete</button>
            <br></br>
            </React.Fragment>
        );
    }

    renderTags(){
        if (this.state.tags.length === 0) return <p> There are no tags! </p>;
        
        return this.setTags() 
    }

    setTags(){
       return <ul>{this.state.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>
    }

    newFunction(){
        let classes = "badge m-2 badge-";
        classes += this.props.counter.value === 0 ? 'warning' : 'primary';
        return classes;
    }

    formatCount(){
        const { value } = this.props.counter;
        return value === 0 ? "Zero" : value;
    }
}

export default Counter;