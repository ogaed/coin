import { HttpAgent, Actor } from "@dfinity/agent";
import { Principal } from "@dfinity/principal";

const MEMECOIN_CANISTER_ID = "your-canister-id"; // Replace with your canister ID

const agent = new HttpAgent();
const memecoinActor = Actor.createActor({
    IDL: {
        name: 'Memecoin',
        methods: {
            init: [{ name: 'name', type: 'Text' }, { name: 'symbol', type: 'Text' }, { name: 'admin', type: 'Principal' }, { name: 'returnType', type: 'Memecoin' }],
            mint: [{ name: 'memecoin', type: 'Memecoin' }, { name: 'recipient', type: 'Principal' }, { name: 'amount', type: 'Nat' }, { name: 'returnType', type: 'Memecoin' }],
            transfer: [{ name: 'memecoin', type: 'Memecoin' }, { name: 'recipient', type: 'Principal' }, { name: 'amount', type: 'Nat' }, { name: 'returnType', type: 'Memecoin' }],
            getBalance: [{ name: 'memecoin', type: 'Memecoin' }, { name: 'account', type: 'Principal' }, { name: 'returnType', type: 'Nat' }]
        },
        getCanisterId: () => MEMECOIN_CANISTER_ID
    },
    agent
});

async function initMemecoin() {
    const adminPrincipal = Principal.fromText(document.getElementById('admin-principal').value);
    const memecoin = await memecoinActor.init("Memecoin", "MEME", adminPrincipal);
    console.log("Memecoin initialized:", memecoin);
}

async function mintMemecoins() {
    const recipientPrincipal = Principal.fromText(document.getElementById('mint-recipient').value);
    const amount = parseInt(document.getElementById('mint-amount').value, 10);
    const memecoin = await memecoinActor.mint(memecoin, recipientPrincipal, amount);
    console.log("Minted Memecoins:", memecoin);
}

async function transferMemecoins() {
    const recipientPrincipal = Principal.fromText(document.getElementById('transfer-recipient').value);
    const amount = parseInt(document.getElementById('transfer-amount').value, 10);
    const memecoin = await memecoinActor.transfer(memecoin, recipientPrincipal, amount);
    console.log("Transferred Memecoins:", memecoin);
}

async function checkBalance() {
    const accountPrincipal = Principal.fromText(document.getElementById('balance-account').value);
    const balance = await memecoinActor.getBalance(memecoin, accountPrincipal);
    document.getElementById('balance-result').innerText = `Balance: ${balance}`;
    console.log("Checked balance:", balance);
}
