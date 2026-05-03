const FailedTask = ({ task }) => {
  return (
    <article className="shrink-0 bg-red-500 text-white w-[320px] rounded-2xl p-5 shadow-md">
      <div className="flex justify-between items-center">
        <span className="bg-white/20 text-xs px-3 py-1 rounded-full">{task.priority}</span>
        <span className="text-xs">{task.date}</span>
      </div>
      <h2 className="text-xl font-bold mt-3">{task.title}</h2>
      <p className="mt-2 text-sm text-white/90">{task.description}</p>
      <p className="mt-3 text-xs uppercase tracking-wider">{task.category}</p>
      <div className="mt-4">
        <span className="inline-block bg-white text-red-600 text-xs font-semibold py-1.5 px-3 rounded-lg">Failed</span>
      </div>
    </article>
  )
}

export default FailedTask