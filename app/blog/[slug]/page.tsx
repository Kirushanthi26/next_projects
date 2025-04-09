type BlogPostPageProps = {
  params: {
    slug: string;
  };
};

export default function BlogPostPage({ params }: BlogPostPageProps) {
  return (
    <main>
      <h1>the blog post</h1>
      <p>{params.slug}</p>
    </main>
  );
}
