<pipeline>
  <job image="node:9.2.1-alpine">
    <Run command="yarn install" />
    <Run command="yarn test" />
  </job>
</pipeline>