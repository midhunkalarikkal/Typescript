// Typeof
// ----------

type alphanum = string | number;

function add(a: alphanum, b: alphanum) {
    if (typeof a === 'number' && typeof b === 'number') {
        return a + b;
    }

    if (typeof a === 'string' && typeof b === 'string') {
        return a.concat(b);
    }

    throw new Error('Invalid arguments. Both arguments must be either numbers or strings.');
}


// Instance of
// -----------------

class Customer {
    isCreditAllowed(): boolean {
        // ...
        return true;
    }
}

class Supplier {
    isInShortList(): boolean {
        // ...
        return true;
    }
}

type BPartner = Customer | Supplier;

function signContract(partner: BPartner) : string {
    let message: string = "";

    if (partner instanceof Customer) {
        message = partner.isCreditAllowed() ? 'Sign a new contract with the customer' : 'Credit issue';
    }

    if (partner instanceof Supplier) {
        message = partner.isInShortList() ? 'Sign a new contract the supplier' : 'Need to evaluate further';
    }

    return message;
}

// In 
// ------

function signContractTwo(partner: BPartner) : string {
    let messageTwo: string;
    if ('isCreditAllowed' in partner) {
        messageTwo = partner.isCreditAllowed() ? 'Sign a new contract with the customer' : 'Credit issue';
    } else {
        messageTwo = partner.isInShortList() ? 'Sign a new contract the supplier ' : 'Need to evaluate further';
    }
    return messageTwo;
}

