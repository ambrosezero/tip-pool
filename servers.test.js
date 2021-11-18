
describe("Servers test (with setup and tear-down)", function () {

  it('Should not execute if serverName is not filled out', function () {
    let serverName = "";
    submitServerInfo();
    expect(allServers).toEqual({});
  })


  it('should add a new server to allServers on submitServerInfo()', function () {
    serverNameInput.value = 'Alice';
    submitServerInfo();

    expect(Object.keys(allServers).length).toEqual(1);
    expect(allServers['server' + serverId].serverName).toEqual('Alice');
  });


  it('should add a table row to #serverTable element', function () {
    serverNameInput.value = 'Alice';
    submitServerInfo();
    expect(serverTbody.innerHTML).not.toBe("");
    // tests updateServerTable() ;
  })
  // ????? is it ok to use afterAll() instead of afterEach()
  afterEach(function () {
    serverTbody.innerHTML = "";
    serverId = 0
    allServers = {};
  });


});