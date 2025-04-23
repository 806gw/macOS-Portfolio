import React, { useState } from "react";
import { useStore } from "~/stores";
import { wallpapers, user } from "~/configs";
import type { MacActions } from "~/types";
import moment from "moment";
import "moment/locale/ko";
import { useInterval } from "react-use";
import { BsArrowRightCircle } from "react-icons/bs";

export default function Login(props: MacActions) {
  const [password, setPassword] = useState("");
  const [sign, setSign] = useState("Touch ID or Enter Password");
  const [loginInputShow, setLoginInputShow] = useState<boolean>(false);
  const dark = useStore((state) => state.dark);
  const [realTime, setRealTime] = useState<number>(Date.now());

  useInterval(() => {
    setRealTime(Date.now());
  }, 1000);

  const keyPress = (e: React.KeyboardEvent) => {
    const keyCode = e.key;
    if (keyCode === "Enter") loginHandle();
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setPassword(e.target.value);
  };

  const loginHandle = () => {
    if (user.password === "" || user.password === password) {
      // not set password or password correct
      props.setLogin(true);
    } else if (password !== "") {
      // password not null and incorrect
      setSign("Incorrect password");
    }
  };

  const loginInputShowHandle = () => {
    setLoginInputShow(true);
  };

  return (
    <div
      className="w-full h-full login text-center"
      style={{
        background: `url(${
          dark ? wallpapers.night : wallpapers.day
        }) center/cover no-repeat`
      }}
      onClick={() => loginInputShowHandle()}
    >
      <div className="time-container">
        <div>{moment(realTime).format("dddd, MMMM DD")}</div>
        <div>{moment(realTime).format("HH:mm")}</div>
      </div>

      <div className="inline-block w-auto relative avatar-container">
        {/* Avatar */}
        <img
          className="rounded-full w-16 h-16 my-0 mx-auto"
          src={user.avatar}
          alt="img"
        />
        {!loginInputShow && (
          <div className="font-medium mt-3 text-xl text-white user-name">{user.name}</div>
        )}

        {/* Password Input */}
        {loginInputShow && (
          <div className="mx-auto grid grid-cols-5 w-46 h-8 mt-4 rounded-md backdrop-blur-2xl bg-gray-300/50 border-radius">
            <input
              className="text-sm text-white col-start-1 col-span-4 no-outline bg-transparent px-3.5 login-input"
              type="password"
              placeholder="Please Press Enter"
              onClick={(e) => e.stopPropagation()}
              onKeyPress={keyPress}
              value={password}
              onChange={handleInputChange}
            />
            <div
              className="col-start-5 col-span-1 flex-center arrow-container"
              onClick={loginHandle}
            >
              <BsArrowRightCircle />
            </div>
          </div>
        )}

        <div className="font-semibold text-sm mt-3 cursor-pointer sign-phrases">
          {sign}
        </div>
      </div>
    </div>
  );
}
