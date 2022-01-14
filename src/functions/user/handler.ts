import { APIGatewayProxyHandler } from 'aws-lambda';
import { formatJSONResponse } from '@libs/apiGateway';
import { middyfy } from '@libs/lambda';

const addUser: APIGatewayProxyHandler  = async (event) => {
  return formatJSONResponse({
    message: `New User Created`,
    event,
  });
}

export const main = middyfy(addUser);
