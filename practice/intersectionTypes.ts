interface BusinessPartner {
    name: string;
    credit: number;
}

interface Identity {
    id: number;
    name: string;
}

interface Contact {
    email: string;
    phone: string;
}


// EmpOne contains all the properties of identity and contact type
type EmpOne = Identity & Contact;

let e : EmpOne = {
    id: 100,
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '(408)-897-5684'
};


// EmpTwo contains all the properties of identity and contact type
type EmpTwo= Identity & BusinessPartner & Contact;

let eone: EmpTwo = {
    id: 100,
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '(408)-897-5684',
    credit: 1000
};

