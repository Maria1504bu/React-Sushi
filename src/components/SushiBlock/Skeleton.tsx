import React from "react"
import ContentLoader from "react-content-loader"

const MyLoader = () => (
  <ContentLoader className="sushi-block"
    speed={2}
    width={280}
    height={379.5}
    viewBox="0 0 280 379.5"
    backgroundColor="#e8f8f1"
    foregroundColor="#ffecd1"
  >
    <circle cx="130" cy="98" r="80"/> 
    <rect x="14" y="210" rx="0" ry="0" width="260" height="27.2" /> 
    <rect x="14" y="260" rx="10" ry="10" width="260" height="46" /> 
    <rect x="20" y="335" rx="5" ry="5" width="80" height="35" /> 
    <rect x="123" y="330" rx="21" ry="21" width="142" height="45" />
  </ContentLoader>
)

export default MyLoader