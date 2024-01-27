import ContentLoader from 'react-content-loader';

export const BlogSkeleton: React.FC = (props: any) => {
  return (
    <ContentLoader
      speed={2}
      width="100%"
        height="100%"
      viewBox="0 0 650 674"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
      {...props}>
      <rect x="25" y="21" rx="35" ry="35" width="624" height="616" />
      <rect x="74" y="518" rx="0" ry="0" width="1" height="1" />
    </ContentLoader>
  );
};
