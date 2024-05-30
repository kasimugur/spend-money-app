

export default function Product({ Product }) {
  return (
    <>
      <div className="product">
        <h6>{Product.title} </h6>
        <div className="price">${Product.price} </div>
        <div className="actions">
          <button>çıkar</button>
          <span className="amout">0</span>
          <button>ekle</button>
        </div>
        <style >{
          `
          .product {
            padding:10px ;
            background: #fff;
            border: 1px solid #ddd;
            margin-bottom:20px;
          }
`
        }
        </style>
      </div>
    </>
  )
}