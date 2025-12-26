const PostProject = () => (
  <div className="min-h-screen bg-gray-50 p-10">
    <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-10">
      <h1 className="text-4xl font-bold mb-8">Post a New Project</h1>
      <form className="space-y-6">
        <input className="w-full p-4 border rounded-xl" placeholder="Project Title" />
        <textarea className="w-full p-4 border rounded-xl h-40" placeholder="Describe your project..." />
        <input className="w-full p-4 border rounded-xl" placeholder="Budget ($)" />
        <button className="w-full bg-green-600 text-white py-4 rounded-xl font-bold text-xl">
          Publish Project
        </button>
      </form>
    </div>
  </div>
);
export default PostProject;