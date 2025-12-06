// app/tailwind-basics/page.tsx

export default function TailwindBasicsPage() {
    return (
      <div className="p-5 max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-10">Tailwind CSS 실습</h1>
  
        {/* 1. Margin과 Padding - 인라인 스타일 vs Tailwind */}
        <section className="mt-10">
          <h2 className="text-2xl font-semibold mb-4">1. Margin과 Padding</h2>
          <p className="text-gray-600 mb-4">
            margin은 요소 바깥의 공간이고, padding은 요소 안쪽의 공간입니다.
          </p>
  
          {/* 인라인 스타일 버전 */}
          <div className="mb-6">
            <h3 className="text-lg font-medium mb-2">인라인 스타일:</h3>
            <div style={{ 
              margin: '30px', 
              padding: '20px', 
              border: '3px solid #2196F3',
              backgroundColor: '#E3F2FD'
            }}>
              <p style={{ margin: 0 }}>
                margin: 30px, padding: 20px
              </p>
            </div>
          </div>
  
          {/* Tailwind 버전 */}
          <div>
            <h3 className="text-lg font-medium mb-2">Tailwind CSS:</h3>
            <div className="m-8 p-5 border-4 border-blue-500 bg-blue-50">
              <p className="m-0">
                m-8 (margin 32px), p-5 (padding 20px)
              </p>
            </div>
          </div>
  
          <div className="mt-4">
            <div className="m-2 p-10 border-4 border-green-500 bg-green-50">
              <p className="m-0">
                m-2 (margin 8px), p-10 (padding 40px)
              </p>
            </div>
          </div>
        </section>
  
        {/* 2. 색상과 크기 */}
        <section className="mt-16">
          <h2 className="text-2xl font-semibold mb-4">2. 색상과 크기</h2>
  
          <div className="mb-4">
            <h3 className="text-lg font-medium mb-2">인라인 스타일:</h3>
            <div style={{ 
              color: '#2196F3',
              fontSize: '24px',
              fontWeight: 'bold',
              marginTop: '20px'
            }}>
              파란색, 24px, 굵은 텍스트
            </div>
          </div>
  
          <div>
            <h3 className="text-lg font-medium mb-2">Tailwind CSS:</h3>
            <div className="text-blue-500 text-2xl font-bold mt-5">
              text-blue-500, text-2xl, font-bold
            </div>
            <div className="text-orange-500 text-lg font-normal mt-2">
              text-orange-500, text-lg, font-normal
            </div>
            <div className="bg-green-500 text-white p-4 mt-5 rounded-lg">
              bg-green-500, text-white, rounded-lg
            </div>
          </div>
        </section>
  
        {/* 3. Flexbox 레이아웃 */}
        <section className="mt-16">
          <h2 className="text-2xl font-semibold mb-4">3. Flexbox 레이아웃</h2>
          <p className="text-gray-600 mb-4">
            display: flex를 사용하면 요소들을 가로나 세로로 배치할 수 있습니다.
          </p>
  
          <div className="mb-6">
            <h3 className="text-lg font-medium mb-2">인라인 스타일:</h3>
            <div style={{ 
              display: 'flex',
              gap: '10px',
              marginTop: '20px'
            }}>
              <div style={{ 
                flex: 1,
                padding: '20px',
                backgroundColor: '#FFE0B2',
                borderRadius: '8px',
                textAlign: 'center'
              }}>
                박스 1
              </div>
              <div style={{ 
                flex: 1,
                padding: '20px',
                backgroundColor: '#C5E1A5',
                borderRadius: '8px',
                textAlign: 'center'
              }}>
                박스 2
              </div>
              <div style={{ 
                flex: 1,
                padding: '20px',
                backgroundColor: '#BBDEFB',
                borderRadius: '8px',
                textAlign: 'center'
              }}>
                박스 3
              </div>
            </div>
          </div>
  
          <div>
            <h3 className="text-lg font-medium mb-2">Tailwind CSS:</h3>
            <div className="flex gap-2.5 mt-5">
              <div className="flex-1 p-5 bg-orange-200 rounded-lg text-center">
                박스 1
              </div>
              <div className="flex-1 p-5 bg-green-200 rounded-lg text-center">
                박스 2
              </div>
              <div className="flex-1 p-5 bg-blue-200 rounded-lg text-center">
                박스 3
              </div>
            </div>
  
            <div className="flex flex-col gap-2.5 mt-5">
              <div className="p-4 bg-pink-200 rounded-lg">
                세로 배치 1
              </div>
              <div className="p-4 bg-purple-200 rounded-lg">
                세로 배치 2
              </div>
            </div>
          </div>
        </section>
  
        {/* 4. 테두리와 그림자 */}
        <section className="mt-16">
          <h2 className="text-2xl font-semibold mb-4">4. 테두리와 그림자</h2>
  
          <div className="mb-6">
            <h3 className="text-lg font-medium mb-2">인라인 스타일:</h3>
            <div style={{ 
              border: '2px solid #2196F3',
              borderRadius: '12px',
              padding: '20px',
              marginTop: '20px',
              boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
            }}>
              테두리와 둥근 모서리, 그림자
            </div>
          </div>
  
          <div>
            <h3 className="text-lg font-medium mb-2">Tailwind CSS:</h3>
            <div className="border-2 border-blue-500 rounded-xl p-5 mt-5 shadow-md">
              border-2, border-blue-500, rounded-xl, shadow-md
            </div>
            <div className="border border-dashed border-orange-500 rounded-none p-5 mt-5">
              border-dashed, rounded-none
            </div>
          </div>
        </section>
  
        {/* 5. 텍스트 정렬 */}
        <section className="mt-16">
          <h2 className="text-2xl font-semibold mb-4">5. 텍스트 정렬</h2>
  
          <div className="mb-6">
            <h3 className="text-lg font-medium mb-2">인라인 스타일:</h3>
            <div style={{ 
              textAlign: 'left',
              padding: '15px',
              backgroundColor: '#F5F5F5',
              marginTop: '20px'
            }}>
              왼쪽 정렬된 텍스트
            </div>
          </div>
  
          <div>
            <h3 className="text-lg font-medium mb-2">Tailwind CSS:</h3>
            <div className="text-left p-4 bg-gray-100 mt-5">
              text-left - 왼쪽 정렬
            </div>
            <div className="text-center p-4 bg-gray-100 mt-2">
              text-center - 가운데 정렬
            </div>
            <div className="text-right p-4 bg-gray-100 mt-2">
              text-right - 오른쪽 정렬
            </div>
          </div>
        </section>
      </div>
    );
  }