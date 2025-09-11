const Box = props => {
  //  Write your code here.
  return (
    <div className={`box ${props.className}`}>
      <p>{props.name}</p>
    </div>
  )
}

const element = (
  //  Write your code here.
  <div>
    <h1>Boxes Container</h1>
    <div class='boxes-container'>
      <Box className='small' name='Small' />
      <Box className='medium' name='Medium' />
      <Box className='large' name='Large' />
    </div>
  </div>
)

ReactDOM.render(element, document.getElementById('root'))
