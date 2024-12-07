'use client';

import { useEffect, useState } from 'react';
import Comments from './comments';

export default function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const [slug, setSlug] = useState('');

  useEffect(() => {
    params.then(({ slug }) => setSlug(slug));
  }, [params]);

  if (!slug) return <div>Loading...</div>;

  const content = `This is the content of the blog post with the slug "${slug}". Explore deep insights and practical tips on ${slug.replace('-', ' ')}.`;

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">{slug.replace('-', ' ')}</h1>
      <p className="text-gray-700 mb-6">{content}</p>
      <Comments />
    </div>
  );
}
