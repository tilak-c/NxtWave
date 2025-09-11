import React from 'react'
import ReactDom from 'react-dom'

const Notification = props => {
  //  Write your code here.
  return (
    <div>
      <img
        src={props.url}
        alt='icon'
        style={{width: '20px', marginRight: '10px'}}
      />
      <p className={props.className}>{props.name}</p>
    </div>
  )
}

const element = (
  //  Write your code here.
  <div class='d-flex flex-column justify-content-center'>
    <h1>Notifications</h1>
    <Notification
      url='https://assets.ccbp.in/frontend/react-js/primary-icon-img.png'
      className='bg bg-primary'
      name='Information Message'
    />
    <Notification
      url='https://assets.ccbp.in/frontend/react-js/success-icon-img.png'
      className='bg bg-success'
      name='Information Message'
    />
    <Notification
      url='https://assets.ccbp.in/frontend/react-js/warning-icon-img.png'
      className='bg bg-warning'
      name='Information Message'
    />
    <Notification
      url='https://assets.ccbp.in/frontend/react-js/info-icon-img.png'
      className='bg bg-info'
      name='Information Message'
    />
  </div>
)

ReactDOM.render(element, document.getElementById('root'))
