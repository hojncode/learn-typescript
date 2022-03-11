interface PhoneNumberDictionary {
[phone: string]: {
    num: number;
};
}

interface Contact {
    name: string;
    address: string;
    phones: PhoneNumberDictionary;
}

enum Place {
    Home = 'home',
    Office = 'office',
    Studio = 'studio',
}

export {
    Contact,
    Place
}