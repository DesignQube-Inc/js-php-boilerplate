var ajaxcall = {};
/**
function to send logs to database
*/


/*   wrapper function to pass the data    */
ajaxcall.send_data = function(json_value, url_id, callback) {

    var json_data = JSON.stringify(json_value);
  
    var mapping = url_mapper(url_id);
    $.ajax({
      type: "POST",
      async: false,
      data: {
        myData: json_data
      },
      url: mapping
    }).done(function(result) {
      callback(result);
    });
};
  

function url_mapper(page_id) {

    var pages = {
        index: "model/index.php"
    };

    return pages[page_id];

}



var gsession = {};

gsession.setSession = function(key, value) {
  if (value) {
    localStorage.setItem(key, value);
  }
};

gsession.getSession = function(key) {
  return localStorage.getItem(key);
};

gsession.clearSession = function(key) {
  localStorage.removeItem(key);
};

gsession.setTempSession = function(key, value) {
  if (value) {
    sessionStorage.setItem(key, value);
  }
};

gsession.getTempSession = function(key) {
  return sessionStorage.getItem(key);
};

gsession.clearTempSession = function(key) {
  sessionStorage.removeItem(key);
};
  
