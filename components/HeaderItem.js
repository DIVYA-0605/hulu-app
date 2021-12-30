function HeaderItem({ Icon, title, onClick }) {
  return (
    <div
      className="flex flex-col items-center cursor-pointer group w-12 sm:w-20 hover:text-white"
      onClick={onClick}
    >
      <Icon className="h-8 mb-1 animate-bounce" />
      <p className="opacity-0 group-hover:opacity-100 tracking-widest">
        {title}
      </p>
    </div>
  );
}

export default HeaderItem;
