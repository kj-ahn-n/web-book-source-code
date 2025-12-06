// app/products-with-props/page.tsx

// 별도 파일의 ProductCard 컴포넌트를 import합니다
import ProductCard from '@/app/components/ProductCard';

export default function ProductsWithPropsPage() {
  // 상품 데이터
  const products = [
    { id: '1', name: '무선 블루투스 이어폰', price: 29900, category: 'digital' },
    { id: '2', name: '스마트워치 프로', price: 199000, category: 'digital' },
    { id: '3', name: '노트북 울트라', price: 1299000, category: 'digital' }
  ];

  return (
    <div style={{ padding: '20px' }}>
      <h1>상품 목록</h1>
      <p>총 {products.length}개의 상품</p>

      <div>
        {/* map으로 각 상품을 순회하며 ProductCard에 전달합니다 */}
        {/* product={product} - 이것이 Props 전달입니다 */}
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}