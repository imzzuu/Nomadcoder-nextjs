import Link from "next/link";
import { useRouter } from "next/router";

export default function NavBar() {
  // location 을 알 수 있다.
  const router = useRouter();
  return (
    <nav>
      {/* 컴포넌트 간 이동에는 a 태그를 사용하기보다 LINK 태그를 이용하도록 한다. => 새로고침 하지 않도록!   */}
      <Link href="/">
        {/* link 태그에는 스타일, class name 등 전달해줄 수 없기 때문에,
           a 태그 없어도 작동은 하지만, 이러한 기능을 사용하기 위해 a 로 감싸주는 것이 좋다.  */}
        <a className={router.pathname === "/" ? "active" : ""}>Home</a>
      </Link>
      <Link href="/about">
        <a className={router.pathname === "/about" ? "active" : ""}>About</a>
      </Link>
      <style jsx global>{`
        a {
          text-decoration: none;
        }
        .active {
          color: tomato;
        }
      `}</style>
    </nav>
  );
}
