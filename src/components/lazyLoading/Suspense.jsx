//! <Suspense> is a first-party React component used to wrap other components that might make asynchronous requests.

//? Example

<Suspense fallback={<Spinner />}>
  <DoesAsynchronousThings />
</Suspense>;