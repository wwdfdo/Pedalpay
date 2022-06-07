import React from "react";

const Navigation = ({ menus, navId, setNavId }) => {
  return (
    <div className="lg:flex gap-8 items-center text-sm font-semibold hidden ">
      {menus.map((menu) => (
        <a
          key={menu.id}
          className={`${navId === menu.id ? "text-[#73f59b]" : "text-white"} ${
            menu.id === "button"
              ? "border-2 border-[#117e3b] py-2 px-5 rounded-md text-white"
              : ""
          }`}
          onClick={() => setNavId(menu.id)}
          href={menu.link}
        >
          {menu.title}
        </a>
      ))}
    </div>
  );
};

export default Navigation;
