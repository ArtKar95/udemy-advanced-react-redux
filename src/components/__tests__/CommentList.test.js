import { mount } from "enzyme";
import Root from "../../Root";
import CommentList from "../CommentList";

let wrapped;

beforeEach(() => {
  const initialState = {
    comments: ["test1", "test2"],
  };
  wrapped = mount(
    <Root initialState={initialState}>
      <CommentList />
    </Root>
  );
});

it("create li comment", () => {
  expect(wrapped.find("li").length).toEqual(2);
});

it("shows the text for each comment", () => {
  expect(wrapped.render().text()).toContain("test1");
  expect(wrapped.render().text()).toContain("test2");
});
