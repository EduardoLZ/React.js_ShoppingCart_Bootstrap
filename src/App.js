import { useState } from "react";

function App() {
  const [cart, setCart] = useState([])
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Product 1",
      price: 1,
      url:
        "https://images.pexels.com/photos/59945/strawberry-fruit-delicious-red-59945.jpeg",
      cart: false,
      quantity: 1,
    },
    {
      id: 2,
      name: "Product 2",
      price: 2,
      url:
        "https://images.pexels.com/photos/52533/orange-fruit-vitamins-healthy-eating-52533.jpeg",
      cart: false,
      quantity: 1,
    },
    {
      id: 3,
      name: "Product 3",
      price: 3,
      url:
        "https://images.pexels.com/photos/51312/kiwi-fruit-vitamins-healthy-eating-51312.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      cart: false,
      quantity: 1,
    }
  ])
  function addtocart(item) {
    let cart2 = [...cart]
    cart2.push({ ...item })
    products.map((i) => {
      if (i.id == item.id) {
        i.cart = true
      }
    })
    setCart(cart2)

  }
  function removetocart(item) {
    let cart2 = cart.filter((i) => i.id != item.id)
    products.map((i) => {
      if (i.id == item.id) {
        i.cart = false
      }
    })
    setCart(cart2)

  }
  function increase(item) {
    let x = cart.map((i) => {

      if (item.id == i.id) {
        console.log('hola')
        i.quantity += 1
      }
      return i
    })
    setCart(x)

  }
  function decrease(item) {
    let x = cart.map((i) => {

      if (item.id == i.id && i.quantity > 1) {
        console.log('hola')
        i.quantity -= 1
      }
      return i
    })
    setCart(x)
  }
  function total() {
    let x = 0
    cart.map((i) => {
      x += i.price * i.quantity

    })
    return x
  }
  return (
    <div className='container mt-2'>
      <div className='row justify-content-center'>
        {products.map((item) => (
          <div className='col-3' key={item.id}>
            <div className="card"  >
              <img src={item.url} className="card-img-top" />
              <div className="card-body">
                <h6 className="card-title">
                  {item.name} - $ {item.price}
                </h6>
                {
                  item.cart == false
                  &&
                  <button className='btn btn-primary' onClick={() => addtocart(item)}>
                    Add to cart
                </button>
                }
                {
                  item.cart == true
                  &&
                  <button className='btn btn-success' onClick={() => addtocart(item)}>
                    Added
                </button>
                }
              </div>
            </div>
          </div>

        ))}

      </div>

      <div className='row mt-3'>
        <table className="table  text-center">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Product</th>
              <th scope="col">Product Name</th>
              <th scope="col">Price</th>
              <th scope="col">Quantity</th>
              <th scope="col">Remove</th>
            </tr>
          </thead>
          <tbody>
            {
              cart.map((i, index) => (

                < tr key={i.id}>
                  <th scope="row">{index + 1}</th>
                  <th scope="row">
                    <img src={i.url} style={{ width: '4rem' }} />
                  </th>
                  <td>{i.name}</td>
                  <td>
                    {i.price}
                  </td>
                  <td>
                    <button
                      onClick={() => decrease(i)}
                      className="btn btn-primary btn-sm"
                    >
                      -
                      </button>
                    {i.quantity}
                    <button
                      onClick={() => increase(i)}

                      className="btn btn-primary btn-sm"
                      size="sm"
                    >
                      +
                      </button>
                  </td>

                  <td>
                    <button onClick={() => removetocart(i)} className="btn btn-danger">
                      Remove
                      </button>
                  </td >
                </tr >
              ))
            }
          </tbody>
        </table>
      </div>
      <div class="row">
        <div class="col text-center">
          <h4>TOTAL: {total()}</h4>
        </div>
      </div>
    </div >
  );
}

export default App;
