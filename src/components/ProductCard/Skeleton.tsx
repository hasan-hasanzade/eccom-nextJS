import React from 'react';
import ContentLoader from 'react-content-loader';

const Skeleton: React.FC = (props: any) => (
  <ContentLoader
    speed={2}
    width={327}
    height={600}
    viewBox="0 0 327 600"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}>
    <rect x="4" y="516" rx="9" ry="9" width="297" height="35" />
    <rect x="4" y="6" rx="16" ry="16" width="296" height="497" />
    <rect x="3" y="560" rx="9" ry="9" width="297" height="35" />
  </ContentLoader>
);

export default Skeleton;
