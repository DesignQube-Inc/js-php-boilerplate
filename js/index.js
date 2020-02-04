function templateClass() {

    /**
     * ajaxcall function is called in the framework.js file
     *
     * @param userData object array contains data of client side
     *
     * @return response data from the backend
     */

    this.sendData = function(userData) {

        var responseData = "";
        ajaxcall.send_data(userData, "index", function(data) {

            console.log("data ==>");
            console.log(data);

            responseData = data;
        });
        return responseData;
    };



    /**
     * parses the json object to js object
     *
     * @param data  to parse json
     *
     * @return data object array
     */

    this.processData = function(data) {

        return JSON.parse(data);
       
    };
    
    this.welcomeText = function() {

        var text = "<h6 >Sample Template for understanding coding structure</h6>";

        $(".sample-template-text").append(text);

    }


    this.displayGithubLink = function(){

        var data = {"templateName":"javascript-php","type":"githubReference"};

        var responseData = this.sendData(data);
        var githubUrl    = this.processData(responseData);

        $(".sample-template-text").append(`<h6 class="reference-url">Reference Url - <a href=${githubUrl}>${githubUrl}</a></h6>`);

    }



}

//============================================ DOCUMENT READY FUNCTION ==================================================//

$(document).ready(function() {

    var templateClassObj = new templateClass();

    templateClassObj.welcomeText();
    templateClassObj.displayGithubLink();

});