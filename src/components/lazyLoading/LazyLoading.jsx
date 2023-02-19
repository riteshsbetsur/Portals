//! Lazy loading is one of the most common design patterns used in web and mobile development. It is widely used with frameworks like Angular and React to increase an application's performance by reducing initial loading time.

import React, { Suspense } from "react";

const OtherComponent = React.lazy(() => import("./OtherComponent"));

function MyComponent() {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <OtherComponent />
      </Suspense>
    </div>
  );
}
