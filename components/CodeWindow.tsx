import { Fragment } from "react";

type Value = string | string[] | boolean;

function renderValue(value: Value) {
  if (typeof value === "boolean") return <span className="text-cyan-300">{String(value)}</span>;
  if (Array.isArray(value)) {
    return (
      <>
        [
        {value.map((item, i) => (
          <Fragment key={item}>
            {i > 0 && ", "}
            <span className="text-green-300">&apos;{item}&apos;</span>
          </Fragment>
        ))}
        ]
      </>
    );
  }
  return <span className="text-green-300">&apos;{value}&apos;</span>;
}

// Editor-style card that renders a plain object as a `const name = { ... }` literal.
export default function CodeWindow({
  title,
  name,
  entries,
  children,
}: {
  title: string;
  name: string;
  entries: Record<string, Value>;
  children?: React.ReactNode;
}) {
  return (
    <div className="flex flex-col rounded-xl overflow-hidden border border-slate-800 bg-slate-900">
      <div className="flex items-center gap-2 px-4 py-3 bg-slate-800/60 border-b border-slate-800">
        <span aria-hidden className="w-3 h-3 rounded-full bg-red-500/70" />
        <span aria-hidden className="w-3 h-3 rounded-full bg-yellow-500/70" />
        <span aria-hidden className="w-3 h-3 rounded-full bg-green-500/70" />
        <span className="ml-2 text-xs text-slate-400 font-mono truncate">{title}</span>
      </div>
      <code className="block flex-1 p-5 font-mono text-sm leading-relaxed text-slate-400 break-words">
        <div>
          <span className="text-purple-400">const</span> <span className="text-cyan-300">{name}</span> = {"{"}
        </div>
        {Object.entries(entries).map(([key, value]) => (
          <div key={key} className="pl-4 sm:pl-6">
            <span className="text-blue-300">{key}</span>: {renderValue(value)},
          </div>
        ))}
        <div>{"};"}</div>
      </code>
      {children && <div className="px-5 py-3 border-t border-slate-800">{children}</div>}
    </div>
  );
}
