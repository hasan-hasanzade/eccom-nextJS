import React from "react"
import ContentLoader from "react-content-loader"

const FullSkeleton = (props: any) => (
  <div className="a__container" style={{width:'1000px', padding: '150px'}}>
  <ContentLoader 
    speed={2}
    width={1400}
    height={660}
    viewBox="0 0 1400 660"
    backgroundColor="#fafafa"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="527" y="86" rx="9" ry="9" width="274" height="32" /> 
    <rect x="527" y="123" rx="9" ry="9" width="209" height="32" /> 
    <rect x="12" y="56" rx="30" ry="30" width="400" height="550" /> 
    <rect x="527" y="317" rx="9" ry="9" width="47" height="41" /> 
    <rect x="366" y="212" rx="0" ry="0" width="0" height="1" /> 
    <rect x="527" y="400" rx="9" ry="9" width="397" height="139" /> 
    <rect x="686" y="549" rx="9" ry="9" width="235" height="37" /> 
    <rect x="527" y="549" rx="9" ry="9" width="137" height="37" />
  </ContentLoader>
  </div>

)

export default FullSkeleton