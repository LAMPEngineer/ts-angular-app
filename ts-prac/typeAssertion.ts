let message;
message = 'abc';

let endsWithC = (<string>message).endsWith('c');

let alternativeWay = (message as string).endsWith('c');