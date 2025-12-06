// app/products-filter/page.tsx
'use client';  // useState와 useEffect를 사용하므로 클라이언트 컴포넌트 필요

import { useState, useEffect } from 'react';
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import ProductCard from '@/app/components/styled/products/ProductCard';

// 상품 타입 정의
type Product = {
  id: string;
  name: string;
  price: number;
  category: string;
};

// 하드코딩된 상품 데이터 (실제로는 서버에서 가져옴)
const allProducts: Product[] = [
  { id: '1', name: '노트북', price: 1200000, category: '전자제품' },
  { id: '2', name: '마우스', price: 35000, category: '전자제품' },
  { id: '3', name: '키보드', price: 89000, category: '전자제품' },
  { id: '4', name: '의자', price: 250000, category: '가구' },
  { id: '5', name: '책상', price: 180000, category: '가구' },
  { id: '6', name: '모니터', price: 350000, category: '전자제품' },
];

export default function ProductsFilterPage() {
  // useState: 필터링된 상품 목록을 저장하는 상태
  // [상태값, 상태를 변경하는 함수] = useState(초기값)
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(allProducts);

  // useState: 선택된 카테고리를 저장하는 상태
  const [selectedCategory, setSelectedCategory] = useState<string>('전체');

  // useEffect: selectedCategory가 변경될 때마다 실행
  // useEffect(실행할 함수, [의존성 배열])
  useEffect(() => {
    // selectedCategory가 '전체'이면 모든 상품 표시
    if (selectedCategory === '전체') {
      setFilteredProducts(allProducts);
    } else {
      // 선택된 카테고리와 일치하는 상품만 필터링
      const filtered = allProducts.filter(
        product => product.category === selectedCategory
      );
      setFilteredProducts(filtered);
    }
  }, [selectedCategory]);  // selectedCategory가 변경될 때만 실행

  // 모든 카테고리 목록 추출 (중복 제거)
  const categories = ['전체', ...Array.from(new Set(allProducts.map(p => p.category)))];

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">상품 목록</h1>

        {/* 카테고리 필터 버튼 */}
        <div className="mb-6 flex flex-wrap gap-2">
          {categories.map(category => (
            <button
              key={category}
              // onClick: 버튼 클릭 시 selectedCategory 상태를 변경
              onClick={() => setSelectedCategory(category)}
              // 조건부 스타일링: 선택된 카테고리는 파란색 배경
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                selectedCategory === category
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-50'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* 필터링된 상품 개수 표시 */}
        <p className="text-gray-600 mb-4">
          {filteredProducts.length}개의 상품이 있습니다.
        </p>

        {/* 상품 그리드 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map(product => (
            <ProductCard
              key={product.id}
              id={product.id}
              name={product.name}
              price={product.price}
              category={product.category}
            />
          ))}
        </div>

        {/* 필터링 결과가 없을 때 */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">선택한 카테고리에 상품이 없습니다.</p>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}