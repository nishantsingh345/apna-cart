import React from "react";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <div className="flex justify-between p-4 bg-black text-white items-center">
      <div>LOGO</div>
      <div>
        <ul className="flex gap-3">
          <li>Home</li>
          <li>Home</li>
          <li>Home</li>
          <li>Home</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
