export default function TagsBasicPage() {
    return (
      <>
        {/* 각 태그의 브라우저 기본 스타일을 보여주기 위한 설정입니다 */}
        {/* Tailwind CSS가 모든 스타일을 리셋하기 때문에 */}
        {/* all: revert로 브라우저 기본 스타일을 복원합니다 */}
        <style>{`
          .browser-default * {
            all: revert;
          }
        `}</style>
  
        <div className="browser-default" style={{ padding: '20px' }}>
          {/* div 태그는 영역을 나누는 가장 기본적인 컨테이너입니다 */}
          {/* 다른 요소들을 그룹으로 묶을 때 사용합니다 */}
          <div>이것은 영역을 나누는 컨테이너입니다</div>
  
          {/* h1, h2, h3 등은 제목 태그입니다 */}
          {/* h1이 가장 큰 제목이고 숫자가 커질수록 작은 제목입니다 */}
          <h1>이것은 가장 큰 제목입니다</h1>
          <h2>이것은 두 번째 크기의 제목입니다</h2>
          <h3>이것은 세 번째 크기의 제목입니다</h3>
  
          {/* p 태그는 문단을 나타냅니다 */}
          {/* 일반적인 텍스트 내용을 표시할 때 사용합니다 */}
          <p>이것은 일반 문단입니다</p>
  
          {/* span 태그는 인라인 요소로, 텍스트의 일부분을 그룹화합니다 */}
          {/* div는 블록 요소이고 span은 인라인 요소라는 차이가 있습니다 */}
          <p>이 문장에서 <span style={{ backgroundColor: 'yellow', fontWeight: 'bold' }}>이 부분만</span> 스타일을 적용할 수 있습니다</p>
  
          {/* img 태그는 이미지를 표시합니다 */}
          {/* Next.js는 Image 컴포넌트 사용을 권장하지만, */}
          {/* 여기서는 기본 HTML 태그 학습을 위해 img를 사용합니다 */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img 
            src="/next.svg" 
            alt="Next.js 로고" 
            width={180}
            height={37}
          />
        </div>
      </>
    );
  }