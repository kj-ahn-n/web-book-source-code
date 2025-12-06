export default function ProductsSimplePage() {
    const products = [
      { 
        id: '1', 
        name: '무선 블루투스 이어폰', 
        price: 29900,
        category: 'digital'
      },
      { 
        id: '2', 
        name: '스마트워치 프로', 
        price: 199000,
        category: 'digital'
      },
      { 
        id: '3', 
        name: '노트북 울트라', 
        price: 1299000,
        category: 'digital'
      }
    ];
  
    return (
      <div style={{ padding: '20px' }}>
        <h1>상품 목록</h1>
        <div>
          {products.map(product => (
            <div key={product.id}>
              <div>상품명: {product.name}</div>
              <div>가격: {product.price}원</div>
              <div>카테고리: {product.category}</div>
              <div>---</div>
            </div>
          ))}
        </div>
      </div>
    );
  }