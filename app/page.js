export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-6 bg-gradient-to-b from-white to-gray-100">
      {/* Hero Section */}
      <section className="text-center max-w-2xl">
        <h1 className="text-5xl font-bold mb-4">SharpSharp management</h1>
        <p className="text-lg text-gray-600 mb-6">Manage your tasks, projects, and team faster than ever — built for sharp minds who mpve sharp-sharp 🚀.</p>
        <button className="px-6 py-3 bg-blue-600 text-white rounded-2xl hover:bg-blue-700 font-semibold shadow-md">Join the waitlist</button>
      </section>

      {/* Features Section */}
      <section className="gird md:grid-cols-3 gap-6 mt-20 max-w-4xl w-full">
        <div className="bg-white p-6 rounded-2xl shadow-sm">
          <h3 className="text-xl font-semibold mb-2">⚡ Speed</h3>
          <p className="text-gray-600">Get things done faster with a tool designed for efficiency.</p>  
        </div>  
        <div className="bg-white p-6 rounded-2xl shadow-sm">
          <h3 className="text-xl font-semibold mb-2">📊 Clarity</h3>
          <p className="text-gray-600">Stay on top of tasks and projects with simple dashboards.</p>  
        </div>  
        <div className="bg-white p-6 rounded-2xl shadow-sm">
          <h3 className="text-xl font-semibold mb-2">🤝 Teamwork</h3>
          <p className="text-gray-600">Collaborate seamlessly and keep everyone aligned.</p>  
        </div>  
      </section>

      {/* CTA section */}
      <section className="mt-20 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to work sharp-sharp?</h2>
        <button className="px-6 py-3 rounded-2xl bg-blue-600 text-white font-semibold shadow-md hover:bg-blue-700">
          Get started
        </button>
      </section>
    </main>
  );
}