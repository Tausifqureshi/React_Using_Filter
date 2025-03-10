import React, {memo} from "react";

function Footer() {
  console.log("Footer Component Rendered"); 
  return <div>Footer</div>;
}

// export default Footer;
export default memo(Footer);
  