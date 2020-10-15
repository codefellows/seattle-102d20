function welcome(hourNow, whoGroup) {
    var greeting, html;
    
    if (hourNow < 0) {
        return "ERROR"
    }
    
    if (hourNow > 23) {
        return "ERROR";
    }


    if (hourNow > 18) {
      greeting = 'Good evening, ';
    } else if (hourNow > 12) {
      greeting = 'Good afternoon, ';
    } else if (hourNow >= 0) {
      greeting = 'Good morning, ';
    } else {
      greeting = 'Welcome, ';
    }
    
    greeting = greeting + whoGroup + '!';
    html = '<h3>' + greeting + '</h3>';

    return html;
  }
