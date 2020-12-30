export default async function (context, req) {
    const https = require('https');

    https.get('https://s167-fr.ogame.gameforge.com/api/players.xml', response => {
        let data = '';

        response.on('data', (chunk) => {
            data =+ chunk;
        })

        response.on('end', () => {
            context.res = {
                body: data
            }
        })
    });
}