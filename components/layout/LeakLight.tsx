const LeakLight = () => {
  return (
    <div className="relative flex justify-center">
      <div className="mix-blend-soft-light filter blur-2xl opacity-90 animate-blob absolute -top-72 left-52 w-72 h-72 bg-primary rounded-full"></div>
      <div className="mix-blend-soft-light filter blur-2xl opacity-90 animate-blob absolute -top-72 left-64 w-72 h-72 bg-pink-300 rounded-full"></div>
      <div className="mix-blend-soft-light filter blur-2xl opacity-90 animate-blob absolute -top-72 left-40 w-72 h-72 bg-purple-300 rounded-full"></div>
    </div>
  )
}

export default LeakLight
