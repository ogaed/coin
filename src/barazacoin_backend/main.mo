import Nat "mo:base/Nat";
import HashMap "mo:base/HashMap";
import Principal "mo:base/Principal";

actor {
  public query func greet(name : Text) : async Text {
    return "Hello, " # name # "!";
  };
};

module Memecoin {
  type Balances = HashMap.HashMap<Principal, Nat>;

  type Memecoin = {
    name : Text;
    symbol : Text;
    totalSupply : Nat;
    balances : Balances;
    admin : Principal;
  };

  public func init(name : Text, symbol : Text, admin : Principal) : async Memecoin {
    let initialSupply : Nat = 1_000_000; // Initial supply of Memecoins

    var balances = HashMap.HashMap<Principal, Nat>();
    balances.put(admin, initialSupply);

    let memecoin : Memecoin = {
      name = name;
      symbol = symbol;
      totalSupply = initialSupply;
      balances = balances;
      admin = admin;
    };

    return memecoin;
  };

  public func mint(memecoin : Memecoin, recipient : Principal, amount : Nat) : async Memecoin {
    assert(memecoin.admin == Principal.fromText(caller), "Only the admin can mint new Memecoins");
    assert(amount > 0, "Amount must be greater than zero");

    // Update the total supply
    let newTotalSupply = memecoin.totalSupply + amount;

    // Update the recipient's balance
    let newBalance = switch (memecoin.balances.get(recipient)) {
      case (null) { amount };
      case (?balance) { balance + amount };
    };

    // Update the Memecoin
    memecoin.balances.put(recipient, newBalance);
    memecoin.totalSupply := newTotalSupply;

    return memecoin;
  };

  public func transfer(memecoin : Memecoin, recipient : Principal, amount : Nat) : async Memecoin {
    let sender = Principal.fromText(caller);
    let senderBalance = switch (memecoin.balances.get(sender)) {
      case (null) { 0 };
      case (?balance) { balance };
    };

    assert(amount > 0, "Amount must be greater than zero");
    assert(senderBalance >= amount, "Insufficient balance");

    // Update the sender's balance
    let newSenderBalance = senderBalance - amount;

    // Update the recipient's balance
    let recipientBalance = switch (memecoin.balances.get(recipient)) {
      case (null) { amount };
      case (?balance) { balance + amount };
    };

    // Update the Memecoin
    memecoin.balances.put(sender, newSenderBalance);
    memecoin.balances.put(recipient, recipientBalance);

    return memecoin;
  };

  public query func getBalance(memecoin : Memecoin, account : Principal) : async Nat {
    return switch (memecoin.balances.get(account)) {
      case (null) { 0 };
      case (?balance) { balance };
    };
  };

  public query func getTotalSupply(memecoin : Memecoin) : async Nat {
    return memecoin.totalSupply;
  };

  public query func getAdmin(memecoin : Memecoin) : async Principal {
    return memecoin.admin;
  };
};
