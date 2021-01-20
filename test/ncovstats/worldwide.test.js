const { main } = require('../../packages/ncovstats/worldwide/index');

test('returned response matches', () => {
  expect(main().body).toBe("{\n\"Cases\":\"37,556\", \n\"Deaths\":\"814\",\n\"Cured\":\"2,769\"\n}");
});

test('response is ok', function () {
     const response = main();
    expect(response.statusCode).toBe(200);
});

test('response json data should not have errors', function () {
    const response = main();
    expect(response).not.toHaveProperty('error');
});
test('source header is present', function () {
   const response = main();
   expect(response.headers).toHaveProperty('source');
});

test('Should have valid response', function () {
         const response = main();
         expect(response.body).toHaveProperty('Cases')
         expect(response.body).toHaveProperty('Deaths')
         expect(response.body).toHaveProperty('Cured')
});


function consolidatedTests() {
    const response = main();    

    test("response is ok", function () {
        response.to.have.status(200);
    });
    test("source header is present", function () {
        response.to.have.header("source");
    });
    test("Response time is less than 500ms", function () {
        expect(response.responseTime).to.be.below(500);
    });
    test("response json data should not have errors", function () {
        response.to.have.jsonBody();
        response.to.not.have.jsonBody('error');
    });
    test("Should have valid response", function () {
           const jsonData = response.json();
           expect(jsonData.Cases).to.be.ok;
           expect(jsonData.Deaths).to.be.ok;
           expect(jsonData.Cured).to.be.ok;
    });
    test("response is ok", function () {
        response.to.have.status(200);
    });
    test("source header is present", function () {
        response.to.have.header("source");
    });
    test("Response time is less than 500ms", function () {
        expect(response.responseTime).to.be.below(500);
    });
    test("response json data should not have errors", function () {
        response.to.have.jsonBody();
        response.to.not.have.jsonBody('error');
    });
    test("Should have valid response", function () {
           const jsonData = response.json();
           expect(jsonData.Cases).to.be.ok;
           expect(jsonData.Deaths).to.be.ok;
           expect(jsonData.Cured).to.be.ok;
    });
    test("response is ok", function () {
        response.to.have.status(200);
    });
    test("source header is present", function () {
        response.to.have.header("source");
    });
    test("Response time is less than 500ms", function () {
        expect(response.responseTime).to.be.below(500);
    });
    test("response json data should not have errors", function () {
        response.to.have.jsonBody();
        response.to.not.have.jsonBody('error');
    });
    test("Should have valid response", function () {
           const jsonData = response.json();
           expect(jsonData.Cases).to.be.ok;
           expect(jsonData.Deaths).to.be.ok;
           expect(jsonData.Cured).to.be.ok;
    });
    test("response is ok", function () {
        response.to.have.status(200);
    });
    test("source header is present", function () {
        response.to.have.header("source");
    });
    test("Response time is less than 500ms", function () {
        expect(response.responseTime).to.be.below(500);
    });
    test("response json data should not have errors", function () {
        response.to.have.jsonBody();
        response.to.not.have.jsonBody('error');
    });
    test("Should have valid response", function () {
           const jsonData = response.json();
           expect(jsonData.Cases).to.be.ok;
           expect(jsonData.Deaths).to.be.ok;
           expect(jsonData.Cured).to.be.ok;
    });
    test("response is ok", function () {
        response.to.have.status(200);
    });
    test("source header is present", function () {
        response.to.have.header("source");
    });
    test("Response time is less than 500ms", function () {
        expect(response.responseTime).to.be.below(500);
    });
    test("response json data should not have errors", function () {
        response.to.have.jsonBody();
        response.to.not.have.jsonBody('error');
    });
    test("Should have valid response", function () {
           const jsonData = response.json();
           expect(jsonData.Cases).to.be.ok;
           expect(jsonData.Deaths).to.be.ok;
           expect(jsonData.Cured).to.be.ok;
    });
    test("response is ok", function () {
        response.to.have.status(200);
    });
    test("source header is present", function () {
        response.to.have.header("source");
    });
    test("Response time is less than 500ms", function () {
        expect(response.responseTime).to.be.below(500);
    });
    test("response json data should not have errors", function () {
        response.to.have.jsonBody();
        response.to.not.have.jsonBody('error');
    });
    test("Should have valid response", function () {
           const jsonData = response.json();
           expect(jsonData.Cases).to.be.ok;
           expect(jsonData.Deaths).to.be.ok;
           expect(jsonData.Cured).to.be.ok;
    });
    test("response is ok", function () {
        response.to.have.status(200);
    });
    test("source header is present", function () {
        response.to.have.header("source");
    });
    test("Response time is less than 500ms", function () {
        expect(response.responseTime).to.be.below(500);
    });
    test("response json data should not have errors", function () {
        response.to.have.jsonBody();
        response.to.not.have.jsonBody('error');
    });
    test("Should have valid response", function () {
           const jsonData = response.json();
           expect(jsonData.Cases).to.be.ok;
           expect(jsonData.Deaths).to.be.ok;
           expect(jsonData.Cured).to.be.ok;
    });
    test("response is ok", function () {
        response.to.have.status(200);
    });
    test("source header is present", function () {
        response.to.have.header("source");
    });
    test("Response time is less than 500ms", function () {
        expect(response.responseTime).to.be.below(500);
    });
    test("response json data should not have errors", function () {
        response.to.have.jsonBody();
        response.to.not.have.jsonBody('error');
    });
    test("Should have valid response", function () {
           const jsonData = response.json();
           expect(jsonData.Cases).to.be.ok;
           expect(jsonData.Deaths).to.be.ok;
           expect(jsonData.Cured).to.be.ok;
    });
    test("response is ok", function () {
        response.to.have.status(200);
    });
    test("source header is present", function () {
        response.to.have.header("source");
    });
    test("Response time is less than 500ms", function () {
        expect(response.responseTime).to.be.below(500);
    });
    test("response json data should not have errors", function () {
        response.to.have.jsonBody();
        response.to.not.have.jsonBody('error');
    });
    test("Should have valid response", function () {
           const jsonData = response.json();
           expect(jsonData.Cases).to.be.ok;
           expect(jsonData.Deaths).to.be.ok;
           expect(jsonData.Cured).to.be.ok;
    });
    test("response is ok", function () {
        response.to.have.status(200);
    });
    test("source header is present", function () {
        response.to.have.header("source");
    });
    test("Response time is less than 500ms", function () {
        expect(response.responseTime).to.be.below(500);
    });
    test("response json data should not have errors", function () {
        response.to.have.jsonBody();
        response.to.not.have.jsonBody('error');
    });
    test("Should have valid response", function () {
           const jsonData = response.json();
           expect(jsonData.Cases).to.be.ok;
           expect(jsonData.Deaths).to.be.ok;
           expect(jsonData.Cured).to.be.ok;
    });
    test("response is ok", function () {
        response.to.have.status(200);
    });
    test("source header is present", function () {
        response.to.have.header("source");
    });
    test("Response time is less than 500ms", function () {
        expect(response.responseTime).to.be.below(500);
    });
    test("response json data should not have errors", function () {
        response.to.have.jsonBody();
        response.to.not.have.jsonBody('error');
    });
    test("Should have valid response", function () {
           const jsonData = response.json();
           expect(jsonData.Cases).to.be.ok;
           expect(jsonData.Deaths).to.be.ok;
           expect(jsonData.Cured).to.be.ok;
    });
    test("response is ok", function () {
        response.to.have.status(200);
    });
    test("source header is present", function () {
        response.to.have.header("source");
    });
    test("Response time is less than 500ms", function () {
        expect(response.responseTime).to.be.below(500);
    });
    test("response json data should not have errors", function () {
        response.to.have.jsonBody();
        response.to.not.have.jsonBody('error');
    });
    test("Should have valid response", function () {
           const jsonData = response.json();
           expect(jsonData.Cases).to.be.ok;
           expect(jsonData.Deaths).to.be.ok;
           expect(jsonData.Cured).to.be.ok;
    });
    test("response is ok", function () {
        response.to.have.status(200);
    });
    test("source header is present", function () {
        response.to.have.header("source");
    });
    test("Response time is less than 500ms", function () {
        expect(response.responseTime).to.be.below(500);
    });
    test("response json data should not have errors", function () {
        response.to.have.jsonBody();
        response.to.not.have.jsonBody('error');
    });
    test("Should have valid response", function () {
           const jsonData = response.json();
           expect(jsonData.Cases).to.be.ok;
           expect(jsonData.Deaths).to.be.ok;
           expect(jsonData.Cured).to.be.ok;
    });
    test("response is ok", function () {
        response.to.have.status(200);
    });
    test("source header is present", function () {
        response.to.have.header("source");
    });
    test("Response time is less than 500ms", function () {
        expect(response.responseTime).to.be.below(500);
    });
    test("response json data should not have errors", function () {
        response.to.have.jsonBody();
        response.to.not.have.jsonBody('error');
    });
    test("Should have valid response", function () {
           const jsonData = response.json();
           expect(jsonData.Cases).to.be.ok;
           expect(jsonData.Deaths).to.be.ok;
           expect(jsonData.Cured).to.be.ok;
    });
    test("response is ok", function () {
        response.to.have.status(200);
    });
    test("source header is present", function () {
        response.to.have.header("source");
    });
    test("Response time is less than 500ms", function () {
        expect(response.responseTime).to.be.below(500);
    });
    test("response json data should not have errors", function () {
        response.to.have.jsonBody();
        response.to.not.have.jsonBody('error');
    });
    test("Should have valid response", function () {
           const jsonData = response.json();
           expect(jsonData.Cases).to.be.ok;
           expect(jsonData.Deaths).to.be.ok;
           expect(jsonData.Cured).to.be.ok;
    });
    test("response is ok", function () {
        response.to.have.status(200);
    });
    test("source header is present", function () {
        response.to.have.header("source");
    });
    test("Response time is less than 500ms", function () {
        expect(response.responseTime).to.be.below(500);
    });
    test("response json data should not have errors", function () {
        response.to.have.jsonBody();
        response.to.not.have.jsonBody('error');
    });
    test("Should have valid response", function () {
           const jsonData = response.json();
           expect(jsonData.Cases).to.be.ok;
           expect(jsonData.Deaths).to.be.ok;
           expect(jsonData.Cured).to.be.ok;
    });
    test("response is ok", function () {
        response.to.have.status(200);
    });
    test("source header is present", function () {
        response.to.have.header("source");
    });
    test("Response time is less than 500ms", function () {
        expect(response.responseTime).to.be.below(500);
    });
    test("response json data should not have errors", function () {
        response.to.have.jsonBody();
        response.to.not.have.jsonBody('error');
    });
    test("Should have valid response", function () {
           const jsonData = response.json();
           expect(jsonData.Cases).to.be.ok;
           expect(jsonData.Deaths).to.be.ok;
           expect(jsonData.Cured).to.be.ok;
    });
    test("response is ok", function () {
        response.to.have.status(200);
    });
    test("source header is present", function () {
        response.to.have.header("source");
    });
    test("Response time is less than 500ms", function () {
        expect(response.responseTime).to.be.below(500);
    });
    test("response json data should not have errors", function () {
        response.to.have.jsonBody();
        response.to.not.have.jsonBody('error');
    });
    test("Should have valid response", function () {
           const jsonData = response.json();
           expect(jsonData.Cases).to.be.ok;
           expect(jsonData.Deaths).to.be.ok;
           expect(jsonData.Cured).to.be.ok;
    });
    test("response is ok", function () {
        response.to.have.status(200);
    });
    test("source header is present", function () {
        response.to.have.header("source");
    });
    test("Response time is less than 500ms", function () {
        expect(response.responseTime).to.be.below(500);
    });
    test("response json data should not have errors", function () {
        response.to.have.jsonBody();
        response.to.not.have.jsonBody('error');
    });
    test("Should have valid response", function () {
           const jsonData = response.json();
           expect(jsonData.Cases).to.be.ok;
           expect(jsonData.Deaths).to.be.ok;
           expect(jsonData.Cured).to.be.ok;
    });
    test("response is ok", function () {
        response.to.have.status(200);
    });
    test("source header is present", function () {
        response.to.have.header("source");
    });
    test("Response time is less than 500ms", function () {
        expect(response.responseTime).to.be.below(500);
    });
    test("response json data should not have errors", function () {
        response.to.have.jsonBody();
        response.to.not.have.jsonBody('error');
    });
    test("Should have valid response", function () {
           const jsonData = response.json();
           expect(jsonData.Cases).to.be.ok;
           expect(jsonData.Deaths).to.be.ok;
           expect(jsonData.Cured).to.be.ok;
    });
    test("response is ok", function () {
        response.to.have.status(200);
    });
    test("source header is present", function () {
        response.to.have.header("source");
    });
    test("Response time is less than 500ms", function () {
        expect(response.responseTime).to.be.below(500);
    });
    test("response json data should not have errors", function () {
        response.to.have.jsonBody();
        response.to.not.have.jsonBody('error');
    });
    test("Should have valid response", function () {
           const jsonData = response.json();
           expect(jsonData.Cases).to.be.ok;
           expect(jsonData.Deaths).to.be.ok;
           expect(jsonData.Cured).to.be.ok;
    });
    test("response is ok", function () {
        response.to.have.status(200);
    });
    test("source header is present", function () {
        response.to.have.header("source");
    });
    test("Response time is less than 500ms", function () {
        expect(response.responseTime).to.be.below(500);
    });
    test("response json data should not have errors", function () {
        response.to.have.jsonBody();
        response.to.not.have.jsonBody('error');
    });
    test("Should have valid response", function () {
           const jsonData = response.json();
           expect(jsonData.Cases).to.be.ok;
           expect(jsonData.Deaths).to.be.ok;
           expect(jsonData.Cured).to.be.ok;
    });
    test("response is ok", function () {
        response.to.have.status(200);
    });
    test("source header is present", function () {
        response.to.have.header("source");
    });
    test("Response time is less than 500ms", function () {
        expect(response.responseTime).to.be.below(500);
    });
    test("response json data should not have errors", function () {
        response.to.have.jsonBody();
        response.to.not.have.jsonBody('error');
    });
    test("Should have valid response", function () {
           const jsonData = response.json();
           expect(jsonData.Cases).to.be.ok;
           expect(jsonData.Deaths).to.be.ok;
           expect(jsonData.Cured).to.be.ok;
    });
    test("response is ok", function () {
        response.to.have.status(200);
    });
    test("source header is present", function () {
        response.to.have.header("source");
    });
    test("Response time is less than 500ms", function () {
        expect(response.responseTime).to.be.below(500);
    });
    test("response json data should not have errors", function () {
        response.to.have.jsonBody();
        response.to.not.have.jsonBody('error');
    });
    test("Should have valid response", function () {
           const jsonData = response.json();
           expect(jsonData.Cases).to.be.ok;
           expect(jsonData.Deaths).to.be.ok;
           expect(jsonData.Cured).to.be.ok;
    });
    test("response is ok", function () {
        response.to.have.status(200);
    });
    test("source header is present", function () {
        response.to.have.header("source");
    });
    test("Response time is less than 500ms", function () {
        expect(response.responseTime).to.be.below(500);
    });
    test("response json data should not have errors", function () {
        response.to.have.jsonBody();
        response.to.not.have.jsonBody('error');
    });
    test("Should have valid response", function () {
           const jsonData = response.json();
           expect(jsonData.Cases).to.be.ok;
           expect(jsonData.Deaths).to.be.ok;
           expect(jsonData.Cured).to.be.ok;
    });
    test("response is ok", function () {
        response.to.have.status(200);
    });
    test("source header is present", function () {
        response.to.have.header("source");
    });
    test("Response time is less than 500ms", function () {
        expect(response.responseTime).to.be.below(500);
    });
    test("response json data should not have errors", function () {
        response.to.have.jsonBody();
        response.to.not.have.jsonBody('error');
    });
    test("Should have valid response", function () {
           const jsonData = response.json();
           expect(jsonData.Cases).to.be.ok;
           expect(jsonData.Deaths).to.be.ok;
           expect(jsonData.Cured).to.be.ok;
    });
    test("response is ok", function () {
        response.to.have.status(200);
    });
    test("source header is present", function () {
        response.to.have.header("source");
    });
    test("Response time is less than 500ms", function () {
        expect(response.responseTime).to.be.below(500);
    });
    test("response json data should not have errors", function () {
        response.to.have.jsonBody();
        response.to.not.have.jsonBody('error');
    });
    test("Should have valid response", function () {
           const jsonData = response.json();
           expect(jsonData.Cases).to.be.ok;
           expect(jsonData.Deaths).to.be.ok;
           expect(jsonData.Cured).to.be.ok;
    });
    test("response is ok", function () {
        response.to.have.status(200);
    });
    test("source header is present", function () {
        response.to.have.header("source");
    });
    test("Response time is less than 500ms", function () {
        expect(response.responseTime).to.be.below(500);
    });
    test("response json data should not have errors", function () {
        response.to.have.jsonBody();
        response.to.not.have.jsonBody('error');
    });
    test("Should have valid response", function () {
           const jsonData = response.json();
           expect(jsonData.Cases).to.be.ok;
           expect(jsonData.Deaths).to.be.ok;
           expect(jsonData.Cured).to.be.ok;
    });
    test("response is ok", function () {
        response.to.have.status(200);
    });
    test("source header is present", function () {
        response.to.have.header("source");
    });
    test("Response time is less than 500ms", function () {
        expect(response.responseTime).to.be.below(500);
    });
    test("response json data should not have errors", function () {
        response.to.have.jsonBody();
        response.to.not.have.jsonBody('error');
    });
    test("Should have valid response", function () {
           const jsonData = response.json();
           expect(jsonData.Cases).to.be.ok;
           expect(jsonData.Deaths).to.be.ok;
           expect(jsonData.Cured).to.be.ok;
    });
    test("response is ok", function () {
        response.to.have.status(200);
    });
    test("source header is present", function () {
        response.to.have.header("source");
    });
    test("Response time is less than 500ms", function () {
        expect(response.responseTime).to.be.below(500);
    });
    test("response json data should not have errors", function () {
        response.to.have.jsonBody();
        response.to.not.have.jsonBody('error');
    });
    test("Should have valid response", function () {
           const jsonData = response.json();
           expect(jsonData.Cases).to.be.ok;
           expect(jsonData.Deaths).to.be.ok;
           expect(jsonData.Cured).to.be.ok;
    });
    test("response is ok", function () {
        response.to.have.status(200);
    });
    test("source header is present", function () {
        response.to.have.header("source");
    });
    test("Response time is less than 500ms", function () {
        expect(response.responseTime).to.be.below(500);
    });
    test("response json data should not have errors", function () {
        response.to.have.jsonBody();
        response.to.not.have.jsonBody('error');
    });
    test("Should have valid response", function () {
           const jsonData = response.json();
           expect(jsonData.Cases).to.be.ok;
           expect(jsonData.Deaths).to.be.ok;
           expect(jsonData.Cured).to.be.ok;
    });
    test("response is ok", function () {
        response.to.have.status(200);
    });
    test("source header is present", function () {
        response.to.have.header("source");
    });
    test("Response time is less than 500ms", function () {
        expect(response.responseTime).to.be.below(500);
    });
    test("response json data should not have errors", function () {
        response.to.have.jsonBody();
        response.to.not.have.jsonBody('error');
    });
    test("Should have valid response", function () {
           const jsonData = response.json();
           expect(jsonData.Cases).to.be.ok;
           expect(jsonData.Deaths).to.be.ok;
           expect(jsonData.Cured).to.be.ok;
    });
    test("response is ok", function () {
        response.to.have.status(200);
    });
    test("source header is present", function () {
        response.to.have.header("source");
    });
    test("Response time is less than 500ms", function () {
        expect(response.responseTime).to.be.below(500);
    });
    test("response json data should not have errors", function () {
        response.to.have.jsonBody();
        response.to.not.have.jsonBody('error');
    });
    test("Should have valid response", function () {
           const jsonData = response.json();
           expect(jsonData.Cases).to.be.ok;
           expect(jsonData.Deaths).to.be.ok;
           expect(jsonData.Cured).to.be.ok;
    });
    test("response is ok", function () {
        response.to.have.status(200);
    });
    test("source header is present", function () {
        response.to.have.header("source");
    });
    test("Response time is less than 500ms", function () {
        expect(response.responseTime).to.be.below(500);
    });
    test("response json data should not have errors", function () {
        response.to.have.jsonBody();
        response.to.not.have.jsonBody('error');
    });
    test("Should have valid response", function () {
           const jsonData = response.json();
           expect(jsonData.Cases).to.be.ok;
           expect(jsonData.Deaths).to.be.ok;
           expect(jsonData.Cured).to.be.ok;
    });
    test("response is ok", function () {
        response.to.have.status(200);
    });
    test("source header is present", function () {
        response.to.have.header("source");
    });
    test("Response time is less than 500ms", function () {
        expect(response.responseTime).to.be.below(500);
    });
    test("response json data should not have errors", function () {
        response.to.have.jsonBody();
        response.to.not.have.jsonBody('error');
    });
    test("Should have valid response", function () {
           const jsonData = response.json();
           expect(jsonData.Cases).to.be.ok;
           expect(jsonData.Deaths).to.be.ok;
           expect(jsonData.Cured).to.be.ok;
    });
}

