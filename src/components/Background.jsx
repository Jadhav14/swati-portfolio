export default function Background() {
  return (
    <>
      <div className="fixed top-20 left-10 w-72 h-72 rounded-full bg-violet-600/20 blur-3xl animate-pulse -z-10"></div>

      <div className="fixed bottom-20 right-10 w-72 h-72 rounded-full bg-cyan-500/20 blur-3xl animate-pulse -z-10"></div>
    </>
  );
}