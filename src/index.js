import React, { Component } from 'react'

export default class extends Component {
  constructor(props) {
    super(props)
    this.state = {
      current_position: this.props.current_position ? this.props.current_position : 0
    }
    this.tabs = ['tit0', 'tit1', 'tit2']
  }
  componentDidMount() {
    this
  }
  render() {
    return (
      <div style={this.styles.contanier}>
        <ul style={this.styles.tab_ul}>
          {this.tabs.map((item) => {
            return <li style={this.styles.tab_li}>{item}</li>
          })}
        </ul>
        <div style={this.styles.content}></div>
      </div>
    )
  }

  styles = {
    contanier: {
      width: 200,
    },
    tab_ul: {
      display: 'flex',
      backgroundColor: 'rgba(238,238,238,.5)',
      listStyle: 'none',
      padding: 0,
      margin: 0,
    },
    tab_li: {
      float: 'left',
      flex: 1,
      borderWidth: 1,
      borderColor: '#eee',
      textAlign: 'center',

    },
    content: {
      height: 200,
      backgroundColor: '#eee',
    },
  }
}
