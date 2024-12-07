import Link from 'next/link';

const posts = [
  { id: 1, title: 'Understanding JavaScript', slug: 'understanding-javascript', excerpt: 'Dive deep into JavaScript concepts and advanced topics.' },
  { id: 2, title: 'Mastering CSS', slug: 'mastering-css', excerpt: 'Learn how to style your web applications with elegance.' },
  { id: 3, title: 'Next.js Best Practices', slug: 'nextjs-best-practices', excerpt: 'Best practices to build scalable and performant Next.js apps.' },
  { id: 4, title: 'React State Management', slug: 'react-state-management', excerpt: 'Simplify your React applications with effective state management.' },
  { id: 5, title: 'Exploring TailwindCSS', slug: 'exploring-tailwindcss', excerpt: 'Learn how to build responsive designs quickly with TailwindCSS.' },
  { id: 6, title: 'Building Accessible Websites', slug: 'accessible-websites', excerpt: 'Ensure your websites are accessible to everyone.' },
];

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-12">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold mb-4">Welcome to My Dynamic Blog</h1>
          <p className="text-xl mb-6">Explore articles on web development, design, and best practices.</p>
          <button className="bg-white text-blue-500 px-6 py-2 rounded-full font-semibold hover:bg-gray-200 transition">
            Start Reading
          </button>
        </div>
      </section>

      {/* Blog Posts */}
      <div className="container mx-auto p-6">
        <h2 className="text-3xl font-bold mb-6 text-gray-800">Latest Articles</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <Link href={`/blog/${post.slug}`} key={post.id}>
              <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition p-4 cursor-pointer border">
                <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                <p className="text-gray-600">{post.excerpt}</p>
                <span className="text-blue-500 hover:underline mt-4 block">Read More</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
