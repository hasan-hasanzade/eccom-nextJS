import ContentLoader from 'react-content-loader';

export const BlogSkeleton: React.FC = (props: any) => {
  return (
    <div style={{ maxWidth: '650px', margin: 'auto' }}>
      <ContentLoader
        speed={2}
        width="100%"
        height="100%"
        viewBox="0 0 650 674"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
        {...props}
      >
        <rect x="5%" y="3%" rx="5%" ry="5%" width="90%" height="80%" />
        <rect x="5%" y="90%" rx="0" ry="0" width="90%" height="10%" />
      </ContentLoader>
    </div>
  );
};
