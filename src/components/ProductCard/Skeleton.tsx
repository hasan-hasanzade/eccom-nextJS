import React from 'react';
import ContentLoader from 'react-content-loader';

const Skeleton: React.FC = (props: any) => (
  <div style={{ width: '100%', maxWidth: '327px' }}>
    <ContentLoader
      speed={2}
      width="100%"
      height="100%"
      viewBox="0 0 327 600"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
      {...props}>
      <rect x="4" y="516" rx="9" ry="9" width="90%" height="35" />
      <rect x="4" y="6" rx="16" ry="16" width="90%" height="80%" />
      <rect x="3" y="560" rx="9" ry="9" width="90%" height="35" />
    </ContentLoader>
  </div>
);

export default Skeleton;
