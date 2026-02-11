// import { Link, useLocation } from "react-router-dom";

// const Breadcrumbs = () => {
//   const location = useLocation();
//   const pathnames = location.pathname.split("/").filter((x) => x);

//   return (
//     <nav>
//       <Link to="/">Home</Link>
//       {pathnames.map((name, index) => {
//         const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
//         const isLast = index === pathnames.length - 1;
//         return isLast ? (
//           <span key={name}> / {name.charAt(0).toUpperCase() + name.slice(1)}</span>
//         ) : (
//           <Link key={name} to={routeTo}>
//             {" "} / {name.charAt(0).toUpperCase() + name.slice(1)}
//           </Link>
//         );
//       })}
//     </nav>
//   );
// };

// export default Breadcrumbs;











import { Link, useLocation } from "react-router-dom";

const routeNameMap = {
  report: "Report",
  "report-name": "Report Name",
  contact: "Contact",
};

const Breadcrumbs = () => {
  const location = useLocation();
  let pathnames = location.pathname.split("/").filter((x) => x);

  // Last segment id ko remove karenge (UUID ya number)
  const uuidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
  if (pathnames.length > 1 && uuidRegex.test(pathnames[pathnames.length - 1])) {
    pathnames.pop();
  }

  return (
    <nav>
      <Link to="/">Home</Link>
      {pathnames.map((name, index) => {
        const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
        const isLast = index === pathnames.length - 1;

        // Custom display name from map or default (hyphen → space + capitalize)
        const displayName =
          routeNameMap[name] ||
          name
            .split("-")
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
            .join(" ");

        return isLast ? (
          <span key={name}> &gt; {displayName}</span>
        ) : (
          <Link key={name} to={routeTo}>
            {" "} &gt; {displayName}
          </Link>
        );
      })}
    </nav>
  );
};

export default Breadcrumbs;

