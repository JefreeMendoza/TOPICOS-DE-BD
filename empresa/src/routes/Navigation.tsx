import { Routes, Route } from "react-router-dom";
import routes from "./routes.ts";
import { map } from "lodash";

function Navigation() {
  return (
    <>
      <Routes>
        {map(routes, (route, index: number) => (
          <Route
            key={index}
            path={route.path}
            element={
              <route.layout>
                <route.page />
              </route.layout>
            }
          />
        ))}
      </Routes>
    </>
  );
}

export default Navigation;
