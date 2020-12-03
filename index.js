export default async function (context, req) {
    context.log('Trigger function');

    const responseMessage = "This HTTP triggered function executed successfuly";

    context.res = {
        body: responseMessage
    };
}