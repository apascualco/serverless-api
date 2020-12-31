import {
    APIGatewayProxyEventBase,
    APIGatewayProxyResult,
    Callback,
    Context,
    Handler
} from 'aws-lambda';

export const handler: Handler = async (event : APIGatewayProxyEventBase<any>, context: Context, callback: Callback<APIGatewayProxyResult>) => {

    const parametersGet: {[name:string]:string}|null  = event.pathParameters;

    if(parametersGet) {
        const id: string = parametersGet['id'];
        console.log(id);
        let result = {
            statusCode: 200,
            body: JSON.stringify(
                { id: id }
            ),
        };
        callback(
            null,
            result
        );
    }
}