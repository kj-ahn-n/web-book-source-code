// app/products-combined/page.tsx

import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import ProductCard from '@/app/components/ProductCard';

export default function ProductsCombinedPage() {
  const products = [
    { id: '1', name: '무선 블루투스 이어폰', price: 29900, category: 'digital' },
    { id: '2', name: '스마트워치 프로', price: 199000, category: 'digital' },
    { id: '3', name: '노트북 울트라', price: 1299000, category: 'digital' }
  ];

  return (
    <div>
      <Header />

      <main style={{ padding: '20px', minHeight: '60vh' }}>
        <h2>상품 목록</h2>
        <p>총 {products.length}개의 상품</p>

        <div>
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}