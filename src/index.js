import React, { Component } from 'react'
import './style.scss'

let defaultContanierStyle = {
  width: 200
}
let defaultCurrentBgColor = 'rgba(56, 165, 197,.5)'
export default class extends Component {
  constructor(props) {
    super(props)
    this.state = {
      current_position: this.props.current_position && this.props.current_position < this.props.titles.length ? this.props.current_position : 0
    }
    this.tabs = this.props.titles
    this.contanierStyle = this.props.contanierStyle ? this.props.contanierStyle : defaultContanierStyle
    this.currentBgColor = this.props.currentBgColor ? this.props.currentBgColor : defaultCurrentBgColor
  }
  componentDidMount() {

  }
  changeTab(i) {
    this.setState({ current_position: i })
  }
  render() {
    let { current_position } = this.state
    return (
      <div className="contanier" style={this.contanierStyle}>
        <ul className="tab_ul">
          {this.tabs.map((item, i) => {
            return <li
              key={i}
              className={current_position == i ? "tab_li current" : 'tab_li'}
              style={{ backgroundColor: current_position == i ? this.currentBgColor : 'rgba(238,238,238,.5)' }}
              onClick={() => { this.changeTab(i) }}>
              {item}
            </li>
          })}
        </ul>
        <div className="content"></div>
      </div>
    )
  }


}
