'use client';

import { useState } from 'react';

export default function Comments() {
  const [comments, setComments] = useState<string[]>([]);
  const [newComment, setNewComment] = useState('');

  const handleAddComment = () => {
    if (newComment.trim()) {
      setComments([...comments, newComment.trim()]);
      setNewComment('');
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Comments</h2>
      <div className="space-y-4">
        {comments.map((comment, index) => (
          <div key={index} className="bg-gray-100 rounded-lg p-3">
            <p className="text-gray-700">{comment}</p>
          </div>
        ))}
      </div>
      <div className="flex gap-3 mt-4">
        <input
          type="text"
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          className="border p-2 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Add a comment"
        />
        <button
          onClick={handleAddComment}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
        >
          Submit
        </button>
      </div>
    </div>
  );
}
