const Token = artifacts.require("Token");

contract("Token", function (accounts) {
  it("sets the total suppy upon deployment", async () => {
    const instance = await Token.new(1000000);
    const totalSupply = await instance.totalSupply();

    assert.equal(
      totalSupply.toNumber(),
      1000000,
      "sets total supply to 1000000"
    );
  });
});
