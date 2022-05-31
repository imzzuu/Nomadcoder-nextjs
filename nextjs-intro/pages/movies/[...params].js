import { useRouter } from "next/router";
import Seo from "../../component/Seo";

export default function Detail({ params }) {
  const router = useRouter();
  // 서버에선 아직 router.query.params 가 배열이 아니라서 오류가 발생
  const [title, id] = params || [];
  return (
    <>
      <Seo title={title} />
      {/* user가 home 에서 상세를 클릭했을 때에만 동작함
    브라우저에서 처리하는 router.query 이므로 
    그냥 url로 바로 접근하면, 접근 불가임 (Loaging...뜸) */}
      <h4>{title}</h4>
    </>
  );
}

// 영화 제목은 검색엔진최적화 하고, 빠른 랜더링을 위해 서버 사이드 사용
export async function getServerSideProps({ params: { params } }) {
  // console.log(params);
  return {
    props: { params },
  };
}
