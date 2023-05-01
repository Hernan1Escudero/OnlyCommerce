
const ItemListContainer = (greeting) => {
    // eslint-disable-next-line react/prop-types
    const greetings=greeting.greeting
    console.log(greeting.greeting)
  return (
    <div className="m-5">{greetings}</div>
  )
}

export default ItemListContainer