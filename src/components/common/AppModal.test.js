import React from "react";
import { mount } from "enzyme";
import AppModal from "./AppModal";

describe("AppModal tests", () => {
  test("should respond to button clicks", () => {
    const onClose = jest.fn();
    const setMessage = jest.fn();
    const title = "title";
    const body = "body";
    const modalButtons = [
      {
        action: setMessage,
        text: "OK"
      }
    ];

    const wrapper = mount(
      <AppModal title={title} show onClose={onClose} buttons={modalButtons}>
        {() => body}
      </AppModal>
    );

    expect(wrapper.find("Button").length).toEqual(1);

    wrapper.find("Button").simulate("click");

    expect(setMessage).toHaveBeenCalled();
  });
});
