const ItemListContainer = ({greeting = 'BIENVENIDOS'}) => {
  return (
    <div className="greeting">{greeting}</div>
  )
}

export default ItemListContainer;