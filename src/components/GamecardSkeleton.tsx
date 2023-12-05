import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";

function GamecardSkeleton() {
  return (
    <Card>
      <Skeleton height="200px" />
      <CardBody>
        <SkeletonText />
      </CardBody>
    </Card>
  );
}

export default GamecardSkeleton;
