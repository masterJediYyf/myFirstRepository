import React, { useEffect } from 'react';

class Father extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <Son grandRef={this.props.grandRef} />
            </div>
        )
    }
}

function Son(props) {
    const { grandRef } = props;
    useEffect(() => {
        console.log('song, effect');
    },[])
    return (
        <div>
            <div>I am alien</div>
            <span ref={grandRef}>这个是想要的元素</span>
        </div>
    )
}

// 子组件拿到 ref
// 高阶组件
const NewFather = React.forwardRef((props, ref) => <Father grandRef={ref} {...props} />);

class GrandFather extends React.Component {
    constructor(props) {
        super(props);
    }
    node = null
    componentDidMount() {
        console.log(this.node);
    }
    render() {
        return (
            <div>
                <NewFather ref={(node) => this.node = node} />
            </div>
        )
    }
}

const App = () => {
    return (
        <div>
            <GrandFather />
        </div>
    )
}

export default App;