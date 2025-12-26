import React, { useState } from 'react';

const Profile: React.FC = () => {
  const [skills, setSkills] = useState<string[]>(['React', 'TypeScript', 'Node.js']);
  const [newSkill, setNewSkill] = useState('');

  // FIXED: Proper key press handler
  const handleAddSkill = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && newSkill.trim() !== '') {
      setSkills(prev => [...prev, newSkill.trim()]);
      setNewSkill('');
      e.preventDefault();
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-20 px-6">
      <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-2xl p-10">
        <h1 className="text-4xl font-bold mb-8 text-gray-800">My Profile</h1>

        <div className="mb-10">
          <h3 className="text-2xl font-semibold mb-4 text-gray-700">Skills</h3>
          <div className="flex flex-wrap gap-3 mb-6">
            {skills.map((skill) => (
              <span key={skill} className="bg-blue-100 text-blue-800 px-5 py-2 rounded-full text-sm font-medium">
                {skill}
              </span>
            ))}
          </div>

          <input
            type="text"
            value={newSkill}
            onChange={(e) => setNewSkill(e.target.value)}
            onKeyPress={handleAddSkill}
            placeholder="+ Add skill (press Enter)"
            className="px-6 py-3 border-2 border-gray-300 rounded-full focus:outline-none focus:border-blue-500"
          />
        </div>
      </div>
    </div>
  );
};

export default Profile;