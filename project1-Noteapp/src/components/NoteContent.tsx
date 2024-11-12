import { History, Tags } from "lucide-react";

const NoteContent = () => {
  return (
    <section className="flex flex-col gap-3 px-4 shadow-md border-x border-x-gray-300 pb-5">
      <h3 className="font-bold text-[1.4rem] text-wrap">
        React Performance Optimization
      </h3>
      <div className="flex flex-col gap-2 border-b border-b-gray-300 pb-3">
        <div className="flex gap-6 items-center text-md">
          <div className="flex items-center gap-2 text-gray-600">
            <Tags size={18} />
            <span className="text-slate-800">Tags</span>
          </div>
          <span className="flex-1">Dev, React</span>
        </div>
        <div className="flex gap-6 items-center">
          <div className="flex items-center gap-2">
            <History className="text-gray-600" size={18} />
            <span className="text-slate-800">Last edited</span>
          </div>
          <span className="flex-1">29, Oct 2024</span>
        </div>
      </div>
      <div className="flex-1 border-b border-b-gray-300">
        {/* here go the content */}
        <span className="inline-block mb-2">
          Key performance optimization techniques:
        </span>
        <ol className="list-inside list-decimal space-y-3">
          <li>
            Code Spitting
            <ul className="list-inside list-disc">
              <li>Use React.lazy() for route-based routing.</li>
              <li>Implement dynamic imports for heavy components.</li>
            </ul>{" "}
          </li>
          <li>
            <span>Memoization</span>
            <ul className="list-inside list-disc">
              <li>useMemo for expensive calculations.</li>
              <li>useCallbacks for function props</li>
            </ul>
          </li>
          <li>
            <span>Virtual list Implementation</span>
            <ul className="list-inside list-disc">
              <li>use react-window for long-list.</li>
              <li>Implement infinite scrolling.</li>
            </ul>
          </li>
        </ol>
        <p className="mt-3">
          TODO: Benchmark current application and identify bottlenecks.
        </p>
      </div>
      {/* bottom sections */}
      <div className="flex items-center gap-3">
        <button className="bg-sky-500 text-white px-4 py-1 rounded-md w-[100px] font-semibold hover:bg-blue-500">
          Save
        </button>
        <button className="w-[100px] bg-slate-300 px-4 py-1 rounded text-black/60 font-semibold hover:bg-slate-100">
          Cancel
        </button>
      </div>
    </section>
  );
};

export default NoteContent;
