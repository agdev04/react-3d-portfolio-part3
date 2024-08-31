"use client";

const menuItems = [
  {
    id: 0,
    label: "About",
  },
  {
    id: 1,
    label: "Skill",
  },
  {
    id: 2,
    label: "Project",
  },
  {
    id: 3,
    label: "Contact",
  },
];

export const Menu = (props) => {
  const { onSectionChange, menuOpened, setMenuOpened, section } = props;

  return (
    <>
      <button
        onClick={() => setMenuOpened(!menuOpened)}
        className={`z-20 fixed top-12 right-12 p-3 bg-[#5356FF] w-11 h-11 rounded-lg `}
      >
        <div
          className={`bg-white h-0.5 rounded-md w-full transition-all ${
            menuOpened ? "rotate-45 translate-y-0.5" : ""
          }`}
        />
        <div
          className={`bg-white h-0.5 rounded-md w-full my-1 ${
            menuOpened ? "hidden" : ""
          }`}
        />
        <div
          className={`bg-white h-0.5 rounded-md w-full transition-all ${
            menuOpened ? "-rotate-45" : ""
          }`}
        />
      </button>
      <div
        className={`z-10 fixed top-0 right-0 bottom-0 bg-white transition-all overflow-hidden flex flex-col ${
          menuOpened ? "w-80" : "w-0"
        }`}
      >
        <div className="flex flex-col items-start justify-center flex-1 gap-6 p-8">
          {menuItems.map((item, index) => (
            <MenuButton
              key={index}
              label={item.label}
              onClick={() => {
                onSectionChange(item.id);
              }}
              section={section}
              id={item.id}
            />
          ))}
        </div>
      </div>
    </>
  );
};

const MenuButton = (props) => {
  const { label, onClick, id, section } = props;

  return (
    <button
      onClick={onClick}
      className={`text-2xl font-bold cursor-pointer  hover:text-[#5356FF] transition-colors`}
    >
      {label}
    </button>
  );
};
