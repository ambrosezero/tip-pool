// ????? it has become evident that numerous refreshes are necessary to ensure proper
//        teardown, as jasmine runs in random order. is there a way around this?
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
    // tests updateServerTable() ;
    serverNameInput.value = 'Alice';
    submitServerInfo();
    expect(serverTbody.innerHTML).not.toBe("");
  })
  afterEach(function () {
    serverTbody.innerHTML = "";
    serverId = 0
    allServers = {};
  });


});