

function Weekday({day}) {
    var days;
    switch (day) {
        case '0':
            days='hétfő';
            break;
        case '1':
            days='kedd';
            break;
        case '2':
            days='szerda';
            break;
        case '3':
            days='csütörtök';
            break;
        case '4':
            days='péntek';
            break;
        case '5':
            days='szombat';
            break;
        default:
            days='vasárnap';
            break;
    }
  return (
    
    <>{days}</>
    
  )
}

export default Weekday