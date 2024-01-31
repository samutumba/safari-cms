module.exports = ( { } ) => ( {
   graphql: {
    enabled: true,
    config: {
      playgroundAlways: false,
      defaultLimit: 10,
      maxLimit: 20,
         shadowCRUD: true,
      generateArtifacts: true,
      apolloServer: {
        tracing: true,
      },
    }
  }
})