       function month(num) {
        
       switch (num) {
            case 1:
                console.log(`Hey It's January for the input ${num}`);
                break;
            case 2:
                console.log("Hey It's February for the input",num);
                break;
            case 3:
                console.log("Hey It's March for the input",num);
                break;
            case 4:
                console.log("Hey It's April for the input",num);
                break;
            case 5:
                console.log("Hey It's May for the input",num);
                break;
            case 6:
                console.log("Hey It's June for the input",num);
                break;
            case 7:
                console.log("Hey It's July for the input",num);
                break;
            case 8:
                console.log("Hey It's August for the input",num);
                break;
            case 9:
                console.log("Hey It's September for the input",num);
                break;
            case 10:
                console.log("Hey It's Octomber for the input",num);
                break;
            case 11:
                console.log("Hey It's November for the input",num);
                break;
            case 12:
                console.log("Hey It's December for the input",num);
                break;
            default:
                console.log(" ");
                console.log("Invalid Input for the input",num);
                break;
        }
    }
        console.log("___________________________________________");
        month(1);
        month(5);
        month(7);
        month(9);
        month(10);
        month(null);
        month(undefined);
        month("100");
        console.log("___________________________________________");
