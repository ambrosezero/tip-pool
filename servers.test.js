
describe("Servers test (with setup and tear-down)", function () {
  beforeAll(function () {
    // initialization logic
    serverNameInput.value = 'Alice';
  });

  it('should add a new server to allServers on submitServerInfo()', function () {
    submitServerInfo();

    expect(Object.keys(allServers).length).toEqual(1);
    expect(allServers['server' + serverId].serverName).toEqual('Alice');
  });
  // ????? the following fails for unclear reasons. error message says "expected '' not to be ''  "
  // ?????  
  it('should add a table row to #serverTable element', function () {
    // tests updateServerTable() ;
    expect(serverTbody.innerHTML).not.toBe("");
  })
  // ????? is it ok to use afterAll() instead of afterEach()
  afterAll(function () {
    serverTbody.innerHTML = "";
    allServers = {};
  });


});