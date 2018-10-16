import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Tab from './tab'

class Tabs extends Component {
  static propTypes = {
    children: PropTypes.instanceOf(Array).isRequired,
  }

  constructor(props) {
    super(props)

    this.state = {
      activeTab: this.props.children[0].props.label,
    }
  }

  onClickTabItem = tab => {
    this.setState({ activeTab: tab })
  }

  render() {
    const {
      onClickTabItem,
      props: { children },
      state: { activeTab },
    } = this

    return (
      <div className="tabs">
        <nav className="pt-2">
          <ul className="-mb-px flex justify-center list-reset rounded">
            {children.map((child, index) => {
              const { label } = child.props

              return (
                <Tab
                  activeTab={activeTab}
                  key={label}
                  label={label}
                  onClick={onClickTabItem}
                  first={index === 0}
                  last={index === children.length - 1}
                />
              )
            })}
          </ul>
        </nav>
        <div className="tab-content">
          {children.map(child => {
            if (child.props.label !== activeTab) return undefined
            return child.props.children
          })}
        </div>
      </div>
    )
  }
}

export default Tabs
