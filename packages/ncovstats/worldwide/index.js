
/*  */

function main(params) {
    return {
        statusCode: 200,
        headers: {
        "source":"WHO",
        },
        body: {
"Cases":"37,556", 
"Deaths":"814",
"Cured":"2,769"
},
    };
}

exports.main = main;
