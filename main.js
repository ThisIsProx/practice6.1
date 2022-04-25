function changeColor(value)
{
    var color = document.body.style.backgroundColor;
    switch(value)
    {
        case 'b':
            color = "#964B00";
            break;
        case 'y':
            color = "#FFFF00";
            break;
        case 'r':
            color = "#FF0000";
            break;
    }
    document.body.style.backgroundColor = color;
}