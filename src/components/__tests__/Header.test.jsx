import { render } from "@testing-library/react";
import Header from "../Header";
import { Provider } from "react-redux";
import store from "../../utils/store";

test("Logo should load on rendering Header", () => {
  //Load Header
  const header = render(
    <Provider store={store}>
      <Header />
    </Provider>
  );
  // Check if logo is loaded
});
