import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

function LoadingSkeleton() {
  return (
    <SkeletonTheme>
      <p>
        <Skeleton width={200} height={200} />
      </p>
    </SkeletonTheme>
  );
}

export default LoadingSkeleton;