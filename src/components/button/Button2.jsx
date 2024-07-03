export const Button2 = ({ value }) => {
  return (
    <div className="button2 relative overflow-hidden px-[9px] lg:px-4 py-[5px] lg:py-2 bg-zinc-900 text-zinc-100 rounded-full font-light text-xs uppercase tracking-widest">
      <h4 className="flex items-center gap-2">
        {value}
      </h4>
    </div>
  );
};