const Button = props => {
  //  Write your code here.
  return <button className={`button ${props.className}`}>{props.name}</button>
}

const element = (
  //  Write your code here.
  <div class='bg'>
    <h1>Social Buttons</h1>
    <div class='d-flex flex-column justify-content-center button'>
      <Button className='like-button' name='Like' />
      <Button className='comment-button' name='Comment' />
      <Button className='share-button' name='Share' />
    </div>
  </div>
)

ReactDOM.render(element, document.getElementById('root'))
