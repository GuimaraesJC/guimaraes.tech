import PostsList from '@/components/PostsList';

export default function Home() {
  return <PostsList />;
}

// export async function getStaticProps() {
//   const allPostsData = getSortedPostsData();
//   return {
//     props: {
//       allPostsData,
//     },
//   };
// }
