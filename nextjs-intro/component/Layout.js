import NavBar from "./NavBar";
export default function Layout({ children }) {
  return (
    <div className="container">
      <NavBar />
      <div>{children} </div>
      <style jsx>
        {`
          .container {
            width: 800px;
            margin: auto;
          }
        `}
      </style>
    </div>
  );
}
