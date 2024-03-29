import 'source-map-support/register'

import { APIGatewayProxyEvent, APIGatewayProxyHandler } from 'aws-lambda'

export const hello: APIGatewayProxyHandler = async (event: APIGatewayProxyEvent) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'Go Serverless Webpack (Typescript) v1.0! Your function executed successfully!',
        input: event,
      },
      null,
      2,
    ),
  }
}
